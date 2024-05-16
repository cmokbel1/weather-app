import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrl: './search-history.component.scss'
})
export class SearchHistoryComponent {
  searchResults = input<string[]>();
  selectedCity = output<string>();

  handleEmit(response:string) {
    this.selectedCity.emit(response);
  }
}
