import { Component, effect, input, output, signal } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, ObservableInput, catchError } from 'rxjs';
import { WeatherDataService } from '../weather-data.service';
import { ReturnedForecastModel } from '../models/weather-data.models';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  constructor(
    private http: HttpClient,
    public weatherDataService: WeatherDataService
  ) {
    effect(() => {
      if (this.previouslySearched() !== '') {
        this.searchCity(this.previouslySearched());
      }
    })
  }

  searchInput: string = '';
  loading: boolean = false;
  apiKey = 'c361e4cd9ce2250893c154c7277e8eab';
  errorMessage: string = '';
  previouslySearched = input<string>('');


  searchCity(userInput: string): void {
    this.loading = true;
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${this.apiKey}&units=imperial`
      )
      .pipe(catchError(this.err))
      .subscribe((currentWeather) => {
        this.weatherDataService.setCurrentData({
          name: currentWeather.name,
          description: currentWeather.weather[0].description,
          feelsLike: currentWeather.main.feels_like,
          humidity: currentWeather.main.humidity,
          temperature: currentWeather.main.temp,
          min: currentWeather.main.temp_min,
          max: currentWeather.main.temp_max,
          icon: currentWeather.weather[0].icon,
        });
        if (
          this.weatherDataService
            .getSearchResults()
            .indexOf(currentWeather.name.toLowerCase()) == -1
        ) {
          this.weatherDataService.setSearchResults(currentWeather.name);
        }
      });
    this.http
      .get<ReturnedForecastModel>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${this.apiKey}&units=imperial`
      )
      .subscribe((forecast) => {
        this.weatherDataService.setForecastData(
          this.weatherDataService.convertForecastData(forecast)
        );
      });
    this.searchInput = '';
    this.loading = false;
  }

  err(err: any, caught: Observable<Object>): ObservableInput<any> {
    if (err.status === 404) {
      this.errorMessage = err.statusText;
      throw new Error('error found. ' + err);
    }
    this.errorMessage = err.statusText;
    throw new Error('error found. ' + err);
  }
}
