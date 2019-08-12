import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Componentes
 */
import { WeatherComponent } from './weather/weather.component';

/**
 * Rutas
 */
const routes: Routes = [
  {
    path: '',
    component: WeatherComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
