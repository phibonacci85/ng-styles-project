import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px',
      transform: 'scale(1)'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.05)'
    })),
    animate(200)
  ]),
  transition('marked => default', [
    style({
      border: '1px solid blue',
      padding: '20px'
    }),
    animate('300ms ease-out')
  ])
]);

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
  ]),
  transition(':leave', [
    animate('500ms ease-in', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        opacity: 1,
        transform: 'translateX(-15%)'
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ]))
  ])
  // transition('slidUp => slidDown', [
  //   style({
  //     transform: 'translateY(-100%)'
  //   }),
  //   animate('300ms ease-out', style({
  //     transform: 'translateY(0)'
  //   }))
  // ]),
  // transition('slidDown => slidUp', [
  //   style({
  //     transform: 'translateY(0)'
  //   }),
  //   animate('300ms ease-out', style({
  //     transform: 'translateY(-100%)'
  //   }))
  // ])
]);

export const slideStateTrigger = trigger('slideState', [
  transition(':enter', [
    style({
      height: '0',
      'min-height': '0'
    }),
    animate('300ms ease-out', style({
      height: '*',
      'min-height': '*'
    }))
  ]),
  transition(':leave', [
    style({
      height: '*',
      'min-height': '*'
    }),
    animate('300ms ease-out', style({
      height: '0',
      'min-height': '0'
    }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0
      }),
      stagger(100, [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translate(15%)',
            offset: 0.4
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1
          })
        ]))
      ])
    ], {optional: true})
  ])
]);