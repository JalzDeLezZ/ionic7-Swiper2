import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { only_images_api_responce } from 'src/assets/data/api1';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements AfterViewInit {
  numberOfDots = 2 * Math.PI * 48 / (8)

  api = only_images_api_responce;

  swiper!: Swiper;
  swiperPaused: boolean = false;
  swiperProgress: number = 0;
  swiperCurrentIndex: number = 0;
  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperElement.nativeElement);
    setTimeout(() => {
      this.onInitialSlide();
    }, 1000);
  }

  onInitialSlide() {
    this.swiper.destroy();
    const swiperParams: SwiperOptions = {
      loop: false,
      speed: 400,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: () => {
          this.swiperCurrentIndex = 0;
        },
        slideChange: () => {
          this.swiperCurrentIndex = this.swiper.activeIndex;
        },
        autoplayTimeLeft: (swiper, timeLeft, percentage) => {
          this.swiperProgress = 1 - percentage;
        },
      },
    };
    this.swiper = new Swiper(this.swiperElement.nativeElement, swiperParams);

    this.swiper.slideTo(0);

    this.swiper.on('reachEnd', () => {
      this.swiper.on('autoplayTimeLeft', (s, t, p) => {
        const isLastSlide = this.swiper.isEnd;
        if (t < 300 && isLastSlide) {
          this.swiperProgress = 1;
          this.swiper.autoplay.stop();
        }
      });
    });
    this.swiper.update();
  }

  onPlauPauseSwiper() {
    if (!this.swiperPaused) {
      this.swiper.autoplay.pause();
    } else {
      this.swiper.autoplay.resume();
    }
    this.swiperPaused = !this.swiperPaused;
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
