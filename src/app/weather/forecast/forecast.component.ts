import { Component, OnInit } from '@angular/core';

/**
 * Providers
 */
import { ForecastService } from './../../providers/forecast.service';

/**
 * Animaciones
 */
import { showUpStaggered } from './../../animations/showUp.animation';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  animations: [showUpStaggered]
})
export class ForecastComponent implements OnInit {

  constructor(public forecastService: ForecastService) {
    // forecastService.forecast$.subscribe(console.log)
  }

  ngOnInit() {}

}
