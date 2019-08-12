import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/**
 * Providers
 */
import { CurrentWeatherService } from './providers/current-weather.service';
import { ForecastService } from './providers/forecast.service';
import { GeolocationService } from './providers/geolocation.service';

/**
 * Modules
 */
import { AppRoutingModule } from './app-routing.module';
import { WeatherModule } from './weather/weather.module';

/**
 * Componentes
 */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherModule
  ],
  providers: [
    CurrentWeatherService,
    ForecastService,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
