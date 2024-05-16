import { Component, input, output, signal } from '@angular/core';
import { WeatherDataService } from './weather-data.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public weatherDataService: WeatherDataService) {}
  title = 'weather-app';
  emittedCityFromHistory = signal<string>('');
  reEmitCityToSearchBar = output<string>();

  handleEmit(result:any) {
    console.log(result);
    this.emittedCityFromHistory.set(result);
  }
}
