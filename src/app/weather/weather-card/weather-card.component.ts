import { Component, OnInit, Input } from '@angular/core';

/**
 * Interfaces
 */
import { Weather } from './../../interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input('weather$') public weather$: Weather;
  @Input('color') public color: string;

  constructor() {}

  ngOnInit() {}

}
