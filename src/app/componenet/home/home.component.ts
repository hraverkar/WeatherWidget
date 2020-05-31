import { WeatherDataInfo } from './../../interface/weather-data-info';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) {}
  value: string;
  weatherData: WeatherDataInfo;
  currDiv = 'A';
  iconurl: any;

  ngOnInit(): void {}

  getWeather(divVal: string) {
    if (this.value.length > 0) {
      this.dataService.getLocationData(this.value).subscribe((res) => {
        this.weatherData = res.body;
        this.changeTemratureData(this.weatherData);
        this.currDiv = divVal;
      });
    } else {
      console.log('City name is not defined');
    }
  }

  changeTemratureData(weatherData: WeatherDataInfo) {
    weatherData.currentTemp = weatherData[`main`][`temp`] - 273.15;
    weatherData.currentFillsLike = weatherData[`main`][`feels_like`] - 273.15;
    weatherData.currentMaxTemp = weatherData[`main`][`temp_max`] - 273.15;
    weatherData.currentMinTemp = weatherData[`main`][`temp_min`] - 273.15;
    weatherData.cityName = weatherData[`name`] + ', ' + weatherData[`sys`][`country`];
    weatherData.curDate = moment(weatherData[`dt`] * 1000)
      .tz('Asia/Kolkata')
      .format('LLLL');
    weatherData.sunRise = moment(weatherData[`sys`][`sunrise`] * 1000)
      .tz('Asia/Kolkata')
      .format('hh:mm:ss A');
    weatherData.sunSet = moment(weatherData[`sys`][`sunset`] * 1000)
      .tz('Asia/Kolkata')
      .format('hh:mm:ss A');
    weatherData.groundLevel = weatherData[`main`][`grnd_level`];
    weatherData.humidity = weatherData[`main`][`humidity`];
    weatherData.pressure = weatherData[`main`][`pressure`];
    weatherData.seaLevel = weatherData[`main`][`sea_level`];
    weatherData.speed = weatherData[`wind`][`speed`];
    weatherData.degree = weatherData[`wind`][`deg`];

    weatherData.description = weatherData[`weather`][0][`description`];
    weatherData.icon = weatherData[`weather`][0][`icon`];
    this.iconurl = 'http://openweathermap.org/img/w/' + weatherData.icon + '.png';
    weatherData.main = weatherData[`weather`][0][`main`];
  }

  clearSearch(divVal: string) {
    this.currDiv = divVal;
  }
}
