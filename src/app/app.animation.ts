import { trigger, animate, transition, style } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [ // using status here for transition
    style({ opacity: 0 }),
    animate('0.5s', style({ opacity: 1 }))
  ]),
]);