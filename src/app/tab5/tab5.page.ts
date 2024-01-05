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
import { IFakeRes, story_adds_api_responce } from 'src/assets/data/api1';
import { tsParticles } from "@tsparticles/engine";


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit, AfterViewInit {
  api: any[] = story_adds_api_responce;
  ionProgressBar = 0; // 0 - 1
  slideIndex = 0;
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
        slideChange: () => {
          console.log('slideChange');
          this.slideIndex = this.swiper.activeIndex;
        },
        reachEnd: () => {
          this.swiper.on('autoplayTimeLeft', (s, t, p) => {
            if (t < 100) {
              this.swiper.autoplay.stop();
            }
          });
        },
      },
    });
  }
  tooglePlayStop() {
    if (this.swiper.autoplay.running) {
      this.swiper.autoplay.stop();
    } else {
      this.swiper.autoplay.start();
    }
  }

  setTargetDelay(newDelay: number) {}

  toInit() {
    this.swiper.destroy();
    this.initSlide();
  }
}

/*
const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["heart"],
  colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

confetti({
  ...defaults,
  particleCount: 50,
  scalar: 2,
});

confetti({
  ...defaults,
  particleCount: 25,
  scalar: 3,
});

confetti({
  ...defaults,
  particleCount: 10,
  scalar: 4,
}); */