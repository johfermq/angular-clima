import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

/**
 * Animacion indivdual
 */
export const showUp = trigger('showUpElement', [
  state('in', style({ opacity: 1, transform: 'scaleY(1)' })), // Cada vez que entra en el dom
  transition(':enter', [ // Cada vez que entra
    style({ opacity: 0, transform: 'scaleY(0)' }),
    animate('0.5s')
  ])
]);

/**
 * Animacion escalonada, varios elementos
 */
export const showUpStaggered = trigger('showUpCollection', [
  transition('* => *', [ // Cada vez que entra o sale un nuevo valor, cualquier cambio de estado
    query(':enter', [
      style({ opacity: 0, transform: 'scaleY(0)' }),
      stagger(100, [
        animate('0.5s', style({ opacity: 1, transform: 'scaleY(1)' }))
      ])
    ], { optional: true })
  ])
]);

