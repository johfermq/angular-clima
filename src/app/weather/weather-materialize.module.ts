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
  MzSpinnerModule
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
    MzSpinnerModule
  ],
  exports: [
    MzNavbarModule,
    MzIconModule,
    MzIconMdiModule,
    MzButtonModule,
    MzCardModule,
    MzSpinnerModule
  ]
})
export class WeatherMaterializeModule { }
