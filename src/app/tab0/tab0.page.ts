import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  only_images_api_responce,
  story_adds_api_responce,
} from 'src/assets/data/api1';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { confetti } from '@tsparticles/confetti';

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
  swiperNavigation = {
    next: false,
    prev: false,
  };
  swiperNav2Buttons = true;
  swiperPaused: boolean = false;
  swiperProgress: number = 0;
  swiperCurrentIndex: number = 0;
  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;

  constructor() {}
  dadEventEmitCarouselEnd(_emit: boolean) {
    if (_emit) {
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
  dadEventEmitMovieEnd(_emit: boolean) {
    if (_emit) {
      this.progressVideo = 0;
      this.swiper.autoplay.start();
      this.swiper.slideNext();
    }
  }

  dadEventEmitForm(_emit: any) {
    onConfetti();
    setTimeout(() => {
      this.swiper.autoplay.start();
      this.swiper.slideNext();
    }, 1500);
  }

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperElement.nativeElement);
    setTimeout(() => {
      this.onInitialSlide();
    }, 1500);
    setTimeout(() => {
      this.stopSwiper();
    }, 1600);
  }

  stopSwiper() {
    if (!this.swiperNav2Buttons) {
      this.swiperNavigation.prev = false;
      this.swiperNavigation.next = false;
    }

    const type = this.api[this.swiper.activeIndex].type;
    if (type === 'video' || type === 'carousel' || type === 'form') {
      this.swiper.autoplay.stop();
      this.swiperProgress = 1;
    } else if (type === 'link') {
      this.swiper.autoplay.stop();
      this.swiperProgress = 1;
      this.swiperNavigation.next = true;
    }
  }

  onInitialSlide() {
    this.swiper.destroy();
    const swiperParams: SwiperOptions = {
      loop: false,
      speed: 400,
      //! %%%%%%%%%%%%%%%%%%
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

          const type = this.api[0].type;
          console.log(type);
          if (type === 'video') {
            //TODO: Play child current video
          }
        },
        slideChange: () => {
          this.stopSwiper();
          this.swiperCurrentIndex = this.swiper.activeIndex;
          const type = this.api[this.swiper.activeIndex].type;
          console.log(type);
          //TODO: Play child current video

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
      this.swiperNav2Buttons = true;
      this.swiperNavigation.next = true;
      this.swiperNavigation.prev = true;
      this.swiper.autoplay.stop();
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
  onSlideNavigation(_type: 'prev' | 'next') {
    if (_type === 'prev') {
      this.swiper.slidePrev();
    } else {
      this.swiper.slideNext();
    }
    if (this.swiperNav2Buttons) {
      this.swiper.autoplay.stop();
    } else {
      this.swiper.autoplay.start();
    }
  }

  like = false;
  onLike() {
    this.like = !this.like;
  }

  progressVideo = 0;
  dadEventEmitCurrentProgressVideo(_emit: number) {
    this.progressVideo = _emit;
  }
}

const onConfetti = async () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ['heart'],
    colors: ['FFC0CB', 'FF69B4', 'FF1493', 'C71585'],
  };

  await confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  await confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  await confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
  await confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2,
    },
  });
};
