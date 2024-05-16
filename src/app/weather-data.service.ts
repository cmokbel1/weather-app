import { Injectable } from '@angular/core';
import {
  CurrentWeatherModel,
  ForecastWeatherModel,
  ReturnedForecastModel,
  ReturnedForecastListModel,
} from './models/weather-data.models';
@Injectable()
export class WeatherDataService {
  private currentData!: CurrentWeatherModel;
  private forecastData: ForecastWeatherModel[] = [];
  private searchResults: string[] = [];

  setCurrentData(data: CurrentWeatherModel) {
    this.currentData = data;
  }

  getCurrentData(): any {
    return this.currentData;
  }

  setForecastData(data: ForecastWeatherModel[]) {
    this.forecastData = data;
  }

  getForecastData(): any {
    return this.forecastData;
  }

  setSearchResults(data: string) {
    this.searchResults.push(data.toLowerCase());
  }

  getSearchResults(): string[] {
    return this.searchResults;
  }

  convertForecastData(data: ReturnedForecastModel): ForecastWeatherModel[] {
    let weatherArray: ForecastWeatherModel[] = [];
    data.list.map((weatherEvent: ReturnedForecastListModel, index) => {
      if ([0, 8, 16, 24, 32].includes(index)) {
        weatherArray.push({
          dt_txt: weatherEvent.dt_txt,
          description: weatherEvent.weather[0]['description'],
          humidity: weatherEvent.main['humidity'],
          temperature: weatherEvent.main['temp'],
          min: weatherEvent.main['temp_min'],
          max: weatherEvent.main['temp_max'],
          windSpeed: weatherEvent.wind['speed'],
          icon: weatherEvent.weather[0]['icon'],
        } as ForecastWeatherModel);
      }
    });
    return weatherArray;
  }
}
