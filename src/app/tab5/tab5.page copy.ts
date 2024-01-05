import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';
import Swiper from 'swiper';
import { DomController } from '@ionic/angular';
import { delay } from 'rxjs';

export class Tab5Page implements OnInit, AfterViewInit {
  ionProgressBar = 0; // 0 - 1
  // targetDelay = 2500; // Initial delay
  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;
  @ViewChild('progressCircle', { static: false }) progressCircle!: ElementRef;
  @ViewChild('progressContent', { static: false }) progressContent!: ElementRef;
  swiper!: Swiper;
  constructor() {}

  ngAfterViewInit() {
    this.initSlide();
    return;
  }
  ngOnInit() {
    // this.initSlide();
    return;
  }

  initSlide() {
    const domCtrl = new DomController();

    this.swiper = new Swiper(this.swiperElement.nativeElement, {
      // spaceBetween: 30,
      loop: false,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        autoplayTimeLeft: (swiper, time, progress) => {
          /* if (this.targetDelay !== swiper.autoplay.delay) {
            // Adjust timer if target delay differs
            swiper.autoplay.stop();
            swiper.autoplay.start({ delay: this.targetDelay });
          } */

          this.ionProgressBar = 1 - progress;
          domCtrl.write(() => {
            this.progressCircle.nativeElement.style.setProperty(
              '--progress',
              1 - progress
            );
            this.progressContent.nativeElement.textContent = `${Math.ceil(
              time / 1000
            )}s`;
          });
        },
        reachEnd: () => {
          console.log('reachEnd');
        },
        slideChange: () => {
          console.log('slideChange');
        }
      },
    });
  }

  togglePauseResume() {
    if (this.swiper.autoplay.running) {
      this.swiper.autoplay.pause();
    } else {
      this.swiper.autoplay.timeLeft = 8000;

      this.swiper.autoplay.start();
      this.swiper.autoplay.resume();

    }
  }

  tooglePlayStop() {
    if (this.swiper.autoplay.running) {
      this.swiper.autoplay.stop();
    } else {
      this.swiper.autoplay.start();
    }
  }

  setTargetDelay(newDelay: number) {

    this.swiper.autoplay.timeLeft = newDelay;

    // this.swiper = new Swiper(this.swiperElement.nativeElement, {
    //   autoplay: {
    //     delay: newDelay,
    //     disableOnInteraction: false,
    //   },
    // });
    this.swiper.autoplay.resume();

    /* this.targetDelay = newDelay;
    this.swiper.autoplay.stop();
    // this.swiper.setProgress(2, 90);
    this.swiper.autoplay.resume();

    this.swiper.on('autoplayTimeLeft', (swiper, time, progress) => {
      console.log(
        '🚀 ~ file: tab5.page.ts:90 ~ Tab5Page ~ setTargetDelay ~ time, progress',
        time,
        progress
      );
    }
    );
    console.log("🚀 ~ file: tab5.page.ts:90 ~ Tab5Page ~ setTargetDelay ~ this.swiper.autoplay.timeLeft:", this.swiper.autoplay.timeLeft)
    this.swiper.autoplay.timeLeft = newDelay;
    console.log("🚀 ~ file: tab5.page.ts:90 ~ Tab5Page ~ setTargetDelay ~ this.swiper.autoplay.timeLeft:", this.swiper.autoplay.timeLeft) */
    // this.swiper.autoplay.start();
  }


  toInit() {
    this.swiper.destroy();
    this.initSlide();
  }
}
