import { Component, OnInit } from '@angular/core';

/**
 * Providers
 */
import { InfoService } from './../providers/info.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(public infoService: InfoService) {}

  ngOnInit() {}

}
