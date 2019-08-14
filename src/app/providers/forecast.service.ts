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
export class ForecastService {

  public forecastSubject: Subject<any>;
  public forecast$: Observable<any>;

  constructor(
    private http: HttpClient,
    private geolocationService: GeolocationService,
    private toastService: MzToastService
  )
  {
    this.forecastSubject = new Subject<any>();
    this.forecast$ = this.forecastSubject.asObservable().pipe(
      map(this.structureData)
    );
    this.geolocationService.coords$.subscribe((coords: Coords) => this.get(coords));
  }

  structureData(data: any)
  {
    const { list, city: { name } } = data;
    let minMaxPerDay = {};

    for (let weatherObject of list)
    {
      const date: Date = new Date(weatherObject.dt * 1000);
      const hours: number = date.getHours();
      const month: number = date.getMonth() + 1;
      const day: number = date.getDate();
      const key: string = `${month}-${day}`;
      const options: object = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      let tempPerDay: Weather = minMaxPerDay[key] || {
        minMaxTemp: {
          date: date.toLocaleString('es-CO', options)
        }
      }

      if (! tempPerDay.cod || hours === 16)
      {
        const { weather } = weatherObject;
        tempPerDay = { ...tempPerDay, ...weather[0] }
        tempPerDay.cod = tempPerDay.id;
        tempPerDay.name = name;
      }

      const { minMaxTemp: { min = null, max = null } } = tempPerDay;
      const { main: { temp_min, temp_max } } = weatherObject;

      if (! min || (temp_min < min)) tempPerDay.minMaxTemp.min = temp_min;
      if (! max || (max < temp_max)) tempPerDay.minMaxTemp.max = temp_max;

      minMaxPerDay[key] = tempPerDay;
    }

    return Object.values(minMaxPerDay);
  }

  get(coords: Coords)
  {
    const { openweather: { key, urlForecast } } = environment;
    const { latitud, longitud } = coords;
    const argumentos: string = `&lat=${latitud}&lon=${longitud}&appid=${key}`;

    this.http.get(`${urlForecast}${argumentos}`)
            .subscribe(
              data => this.forecastSubject.next(data),
              error => this.showToast('Error al obtener el pronóstico  del clima.', 'red')
            );
  }

  showToast(text, color)
  {
    this.toastService.show(text, 4000, color);
  }
}
