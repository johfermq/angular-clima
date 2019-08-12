import { Component, OnInit } from '@angular/core';

/**
 * Providers
 */
import { CurrentWeatherService } from './../../providers/current-weather.service';

/**
 * Animaciones
 */
import { showUp } from './../../animations/showUp.animation';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  animations: [showUp]
})
export class CurrentWeatherComponent implements OnInit {

  constructor(public currentWeatherService: CurrentWeatherService) {
    // currentWeatherService.weather$.subscribe(console.log)
  }

  ngOnInit() {}

}
