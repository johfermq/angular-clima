import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Materialize
 */
import {
  MzNavbarModule,
  MzIconModule,
  MzIconMdiModule,
  MzButtonModule,
  MzCardModule,
  MzSpinnerModule,
  MzToastModule
} from 'ngx-materialize';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MzNavbarModule,
    MzIconModule,
    MzIconMdiModule,
    MzButtonModule,
    MzCardModule,
    MzSpinnerModule,
    MzToastModule
  ],
  exports: [
    MzNavbarModule,
    MzIconModule,
    MzIconMdiModule,
    MzButtonModule,
    MzCardModule,
    MzSpinnerModule,
    MzToastModule
  ]
})
export class WeatherMaterializeModule { }
