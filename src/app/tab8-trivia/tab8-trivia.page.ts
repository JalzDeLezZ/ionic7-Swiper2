import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab8-trivia',
  templateUrl: './tab8-trivia.page.html',
  styleUrls: ['./tab8-trivia.page.scss'],
})
export class Tab8TriviaPage implements OnInit {

  animateCss= 'animate__bounceOut'
  flagAnimate = false;

  coinAnimate = {
    enable : false,
  }

  constructor() { }

  ngOnInit() {
    return;
  }

  earnPoints() {
    this.coinAnimate.enable = this.coinAnimate.enable ? false : true;
  }

}
