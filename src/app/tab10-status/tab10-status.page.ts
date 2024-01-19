import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-tab10-status',
  templateUrl: './tab10-status.page.html',
  styleUrls: ['./tab10-status.page.scss'],
  animations: [
    trigger('circleAnimation', [
      state(
        'start',
        style({
          strokeDasharray: '0',
          strokeDashoffset: '315',
        })
      ),
      state(
        'end',
        style({
          strokeDasharray: '315',
          strokeDashoffset: '0',
        })
      ),
      transition('start => end', animate('1.9s ease-in-out')),
    ]),
  ],
})
export class Tab10StatusPage implements OnInit {

  numberOfDots = (2 * Math.PI * 48) / 8;
  constructor() { }

  ngOnInit() {return;
  }

  public animationState = 'start';

  public toggleAnimation(): void {
    this.animationState = this.animationState === 'start' ? 'end' : 'start';
  }

  clickEffect1 = false;
  onClickEffect() {
    this.clickEffect1 = true;

    // Después de 1.9 segundos, restablecer la animación
    setTimeout(() => {
      this.clickEffect1 = false;
    }, 1900);
  }
}
