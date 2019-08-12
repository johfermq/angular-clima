import { Component, OnInit } from '@angular/core';

/**
 * Providers
 */
import { CurrentWeatherService } from './../../providers/current-weather.service';

/**
 * Animaciones
 */
// import { loadingAnimation } from './../../animations/loading.animation';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  // animations: [loadingAnimation()]
})
export class LoadingComponent implements OnInit {

  // colors: string[];
  // elements: string[];

  constructor(public currentWeatherService: CurrentWeatherService) {
    // this.colors = ['#3f51b5', '#e91e63', '#673ab7', '#00bcd4', '#ffc107'];
  }

  ngOnInit() {
    // this.set();
  }

  // set() {
  //   this.elements = [...this.colors];
  //   this.nextIteration();
  // }

  // clear() {
  //   this.elements = [];
  // }

  // nextIteration() {
  //   setTimeout(() => {
  //     if (this.elements.length === 0) return this.set();

  //     this.clear();
  //   }, 100 * this.elements.length + 300)
  // }

}
