export interface WeatherDataInfo {
  currentTemp: number;
  currentFillsLike: number;
  currentMaxTemp: number;
  currentMinTemp: number;
  cityName: string;
  curDate: string;
  sunRise: string;
  sunSet: string;
  groundLevel: number;
  humidity: number;
  pressure: number;
  seaLevel: number;
  speed: number;
  degree: number;
  description: string;
  icon: string;
  // icon = weatherData.weather[0].icon;
  // this.iconurl = 'http://openweathermap.org/img/w/' + icon + '.png';
  main: string;
}
