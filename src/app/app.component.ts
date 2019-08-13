import { Component, OnInit } from '@angular/core';

/**
 * Providers
 */
import { InfoService } from './providers/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public infoService: InfoService) {}

  ngOnInit() {}
}
