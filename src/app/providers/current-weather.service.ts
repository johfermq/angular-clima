import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Variables
 */
import { environment } from './../../environments/environment';

/**
 * Providers
 */
import { GeolocationService } from './geolocation.service';
import { MzToastService } from 'ngx-materialize';

/**
 * Interfaces
 */
import { Coords } from './../interfaces/coords.interface';
import { Weather } from './../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  public weatherSubject: Subject<any>;
  public weather$: Observable<any>;

  constructor(
    private http: HttpClient,
    private geolocationService: GeolocationService,
    private toastService: MzToastService
  )
  {
    this.weatherSubject = new Subject<any>();
    this.weather$ = this.weatherSubject.asObservable().pipe(
      map(this.structureData)
    );
    this.geolocationService.coords$.subscribe((coords: Coords) => this.get(coords));
  }

  structureData(data: any)
  {
    const { name, cod, weather, main: { temp } } = data;

    const response: Weather = {
      name,
      temp,
      cod: weather[0].id,
      ...weather[0]
    }

    return response;
  }

  get(coords: Coords)
  {
    const { openweather: { key, urlWeather } } = environment;
    const { latitud, longitud } = coords;
    const argumentos: string = `&lat=${latitud}&lon=${longitud}&appid=${key}`;

    this.http.get(`${urlWeather}${argumentos}`)
            .subscribe(
              data => this.weatherSubject.next(data),
              error => this.showToast('Error al obtener el clima actual.', 'red')
            );
  }

  showToast(text, color)
  {
    this.toastService.show(text, 4000, color);
  }

}
