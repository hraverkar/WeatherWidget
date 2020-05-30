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
  weatherData: any;
  currDiv = 'A';
  iconurl: any;

  ngOnInit(): void {}

  getWeather(divVal: string) {
    if (this.value.length > 0) {
      this.dataService.getLocationData(this.value).subscribe((res) => {
        this.weatherData = res.body;
        console.log(this.weatherData);
        this.changeTemratureData(this.weatherData);
      });
      this.currDiv = divVal;
    } else {
      console.log('City name is not defined');
    }
  }

  changeTemratureData(weatherData: WeatherDataInfo) {
    console.log(weatherData);
    // const currentTemp = weatherData.main.temp - 273.15;
    // const currentFillsLike = weatherData.main.feels_like - 273.15;
    // const currentMaxTemp = weatherData.main.temp_max - 273.15;
    // const currentMinTemp = weatherData.main.temp_min - 273.15;
    // const cityName = weatherData.name + ',' + weatherData.sys.country;
    // const date = moment(weatherData.dt * 1000)
    //   .tz('Asia/Kolkata')
    //   .format('MM/DD/YYYY HH:mm');
    // const sunRise = moment(weatherData.sys.sunrise * 1000)
    //   .tz('Asia/Kolkata')
    //   .format('MM/DD/YYYY HH:mm');
    // const sunSet = moment(weatherData.sys.sunset * 1000)
    //   .tz('Asia/Kolkata')
    //   .format('MM/DD/YYYY HH:mm');
    // const groundLevel = weatherData.main.grnd_level;
    // const humidity = weatherData.main.humidity;
    // const pressure = weatherData.main.pressure;
    // const seaLevel = weatherData.main.sea_level;
    // const speed = weatherData.wind.speed;
    // const degree = weatherData.wind.deg;

    // const description = weatherData.weather[0].description;
    // const icon = weatherData.weather[0].icon;
    // this.iconurl = 'http://openweathermap.org/img/w/' + icon + '.png';
    // const main = weatherData.weather[0].main;


    // wea currentTemp = weatherData.main.temp - 273.15;
    // const currentFillsLike = weatherData.main.feels_like - 273.15;
    // const currentMaxTemp = weatherData.main.temp_max - 273.15;
    // const currentMinTemp = weatherData.main.temp_min - 273.15;
    // const cityName = weatherData.name + ',' + weatherData.sys.country;
    // const date = moment(weatherData.dt * 1000)
    //   .tz('Asia/Kolkata')
    //   .format('MM/DD/YYYY HH:mm');
    // const sunRise = moment(weatherData.sys.sunrise * 1000)
    //   .tz('Asia/Kolkata')
    //   .format('MM/DD/YYYY HH:mm');
    // const sunSet = moment(weatherData.sys.sunset * 1000)
    //   .tz('Asia/Kolkata')
    //   .format('MM/DD/YYYY HH:mm');
    // const groundLevel = weatherData.main.grnd_level;
    // const humidity = weatherData.main.humidity;
    // const pressure = weatherData.main.pressure;
    // const seaLevel = weatherData.main.sea_level;
    // const speed = weatherData.wind.speed;
    // const degree = weatherData.wind.deg;

    // const description = weatherData.weather[0].description;
    // const icon = weatherData.weather[0].icon;
    // this.iconurl = 'http://openweathermap.org/img/w/' + icon + '.png';
    // const main = weatherData.weather[0].main;
  }

  clearSearch(divVal: string) {
    this.currDiv = divVal;
  }
}
