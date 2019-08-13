import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  title: string;
  description: string;

  constructor() {
    this.title = 'Angular Clima';
    this.description = 'Obtenga el clima actual y el pronóstico de 3 horas por 5 días para su ciudad.';
  }
}
