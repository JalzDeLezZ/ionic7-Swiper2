import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  only_images_api_responce,
  story_adds_api_responce,
} from 'src/assets/data/api1';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { IEmit } from './components/native-carousel/native-carousel.component';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements AfterViewInit {
  coinAnimate = false;

  earnPoints(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.coinAnimate = true;
      setTimeout(() => {
        this.coinAnimate = false;
        resolve(true);
      }, 3000);
    });
  }

  api = story_adds_api_responce;
  flag_showMore = true;

  swiper!: Swiper;
  swiperPaused: boolean = false;
  swiperProgress: number = 0;
  swiperCurrentIndex: number = 0;
  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;

  constructor() {}
  dadEventEmit(_emit: IEmit) {
    if (_emit.value === 'end' && _emit.type === 'carousel') {
      this.swiperProgress = 0;
      this.earnPoints().then((res) => {
        if (res) {
          this.swiper.autoplay.timeLeft = 5000;
          this.swiper.autoplay.start();
          this.swiper.slideNext();
        }
      });
    }
  }

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperElement.nativeElement);
    setTimeout(() => {
      this.onInitialSlide();
    }, 1000);
    setTimeout(() => {
      this.stopSwiper();
    }, 1200);
  }

  stopSwiper() {
    const type = this.api[this.swiper.activeIndex].type;
    if (type === 'video' || type === 'carousel' || type === 'form') {
      this.swiper.autoplay.stop();
      this.swiperProgress = 1;
    }
  }

  onInitialSlide() {
    this.swiper.destroy();
    const swiperParams: SwiperOptions = {
      loop: false,
      speed: 400,
      allowTouchMove: false,
      autoplay: {
        delay: 3000,
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
          this.stopSwiper();

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
}
