import { Component, Signal, computed, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, ObservableInput, catchError } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  constructor(private http: HttpClient) {}

  searchInput:string = '';
  loading:boolean = false;
  currentWeather = signal([]);
  apiKey = 'c361e4cd9ce2250893c154c7277e8eab';
  errorMessage:string = '';

  searchCity() {
    this.loading = true;
    console.log("search: " + this.searchInput);
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.searchInput}&appid=${this.apiKey}&units=imperial`)
    .pipe(catchError(this.err))
    .subscribe((currentWeather) => {
      console.log(currentWeather);
    })
    this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.searchInput}&appid=${this.apiKey}&units=imperial`)
    .subscribe((forecast) => {
      console.log(forecast);
    })
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


