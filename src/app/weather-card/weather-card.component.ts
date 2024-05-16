import { Component, input } from '@angular/core';
import { ForecastWeatherModel } from '../models/weather-data.models';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  forecastData = input<ForecastWeatherModel>();
}
