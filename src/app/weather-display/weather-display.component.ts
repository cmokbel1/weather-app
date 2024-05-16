import { Component, input } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { CurrentWeatherModel } from '../models/weather-data.models';
@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss'],
})
export class WeatherDisplayComponent {
  constructor(public weatherDataService: WeatherDataService) {}
  currentWeather = input<CurrentWeatherModel>();
}
