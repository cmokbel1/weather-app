import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherDataService } from './weather-data.service';
import { SearchHistoryComponent } from './search-history/search-history.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    WeatherDisplayComponent,
    WeatherCardComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
