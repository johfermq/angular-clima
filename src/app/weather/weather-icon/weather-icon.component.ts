import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {

  icon: string;
  code: number;
  url: string;

  @Input('cod') set cod(value: number) {
    this.code = value;
    this.icon = this.obtenerIcono();
    this.url = this.obtenerRutaIcono();
  }

  constructor() {
    this.icon = 'weather';
  }

  ngOnInit() {}

  obtenerIcono(): string {
    if (this.code >= 200 && this.code <= 250) return 'thunder';
    if (this.code >= 300 && this.code <= 350) return 'rainy-4';
    if (this.code >= 500 && this.code <= 550) return 'rainy-7';
    if (this.code == 600) return 'snowy-4';
    if (this.code == 601) return 'snowy-5';
    if (this.code >= 602 && this.code <= 650) return 'snowy-6';
    if (this.code == 800) return 'day';
    if (this.code == 801) return 'cloudy-day-1';
    if (this.code == 802) return 'cloudy-day-2';
    if (this.code >= 803) return 'cloudy-day-3';

    return 'weather';
  }

  obtenerRutaIcono(): string {
    return `./../../../assets/svg/${this.icon}.svg`;
  }

}
