import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Modules
 */
import { WeatherMaterializeModule } from './weather-materialize.module';

/**
 * Componentes
 */
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LoadingComponent } from './loading/loading.component';
import { GeolocationButtonComponent } from './geolocation-button/geolocation-button.component';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    CurrentWeatherComponent,
    WeatherIconComponent,
    WeatherCardComponent,
    ForecastComponent,
    LoadingComponent,
    GeolocationButtonComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherMaterializeModule
  ],
  exports: [
    WeatherMaterializeModule
  ]
})
export class WeatherModule { }
