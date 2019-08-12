import { trigger, style, animate, query, stagger, transition } from '@angular/animations';

export const loadingAnimation = () =>
{
  return trigger('loading', [
    transition('* => *', [ // Cada vez que entra o sale un nuevo valor, cualquier cambio de estado
      query(':enter', [ // nombre del evento (entrada, salida...)
          style({ opacity: 0 }), // Inicializar el valor
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ],
        { optional: true }
      ),
      query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ],
        { optional: true }
      )
    ])
  ]);
}
