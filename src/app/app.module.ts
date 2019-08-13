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
import { InfoService } from './providers/info.service';

/**
 * Modules
 */
import { AppRoutingModule } from './app-routing.module';
import { WeatherModule } from './weather/weather.module';

/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CurrentWeatherService,
    ForecastService,
    GeolocationService,
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
