export interface CurrentWeatherModel {
  name: string;
  description: string;
  feelsLike: number;
  humidity: number;
  temperature: number;
  min: number;
  max: number;
  icon: string;
}

export interface ForecastWeatherModel {
  dt_txt: string;
  description: string;
  humidity: number;
  temperature: number;
  min: number;
  max: number;
  windSpeed: number;
  icon: string;
}

export interface ReturnedForecastModel {
  city: { [key: string]: any };
  list: ReturnedForecastListModel[];
}

export interface ReturnedForecastListModel {
  dt_txt: string;
  main: { [key: string]: any };
  weather: { [key: string]: any }[];
  wind: { [key: string]: any };
}
