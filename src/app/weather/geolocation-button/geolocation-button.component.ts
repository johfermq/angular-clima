import { Component, OnInit } from '@angular/core';

/**
 * Providers
 */
import { GeolocationService } from './../../providers/geolocation.service';

@Component({
  selector: 'app-geolocation-button',
  templateUrl: './geolocation-button.component.html',
  styleUrls: ['./geolocation-button.component.scss']
})
export class GeolocationButtonComponent implements OnInit {

  granted: boolean;

  constructor(public geolocationService: GeolocationService) {
    this.granted = false;
  }

  ngOnInit() {
    this.geolocationService.permissions$.then(status => {
      this.granted = status === 'granted';

      if (this.granted) this.geolocationService.requestGeolocation();
    });
  }

}
