import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * Interfaces
 */
import { Coords } from './../interfaces/coords.interface';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public coordsSubject: Subject<Coords>;
  public coords$: Observable<Coords>;
  public coordsPromise: Promise<Coords>;
  public permissions$: Promise<string>;
  public myNavigator: any;

  constructor() {
    this.coordsSubject = new Subject<Coords>();
    this.coords$ = this.coordsSubject.asObservable();
    this.myNavigator = window.navigator;

    if (this.myNavigator) {
      this.permissions$ = this.myNavigator.permissions
                                          .query({ name: 'geolocation' })
                                          .then(permission => permission.state);
    }
  }

  requestGeolocation()
  {
    if (! this.coordsPromise) this.coordsPromise = this.getGeolocation();

    this.coordsPromise.then((coords: Coords) => this.coordsSubject.next(coords));
  }

  getGeolocation(): Promise<Coords>
  {
    return new Promise((resolve, reject) =>
    {
      if (! this.myNavigator || ! this.myNavigator.geolocation) {
        reject('La geolocalización no esta disponible.');
      }

      this.myNavigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            latitud: position.coords.latitude,
            longitud: position.coords.longitude
          });
        },
        error => reject('Error al obtener la geolocalización.')
      );
    })
  }
}
