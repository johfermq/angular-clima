import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

/**
 * Rutas
 */
const routes: Routes = [
  {
    path: 'clima',
    loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
  },
  {
    path: '**',
    redirectTo: 'clima',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
