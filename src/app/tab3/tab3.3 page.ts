import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  filter,
  interval,
  skipUntil,
  skipWhile,
  switchMap,
  takeUntil,
  takeWhile,
  timer,
} from 'rxjs';
import { story_adds_api_responce } from 'src/assets/data/api1';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { EMPTY } from 'rxjs';

export class Tab3Page implements AfterViewInit, OnChanges, OnDestroy {
  public progress = 0;
  public slideIndex = 0;

  public restart = false;
  isPaused$ = new BehaviorSubject<boolean>(false); // Initially paused
  private onDestroy$ = new Subject<void>();
  private autoPlaySubscription?: Subscription;
  timerSubscription?: Subscription; // Declare timerSubscription
  //! https://swiperjs.com/swiper-api
  private slideChangeSubscription: any;

  story_adds = story_adds_api_responce;
  flag_showMore = true;

  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;
  swiper!: Swiper;
  swiperParams: SwiperOptions = { speed: 400 };


  constructor() {}

  // detect when index_slide changes
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngAfterViewInit() {
    this.initSlide();
  }

  initSlide() {
    this.swiper = new Swiper(this.swiperElement.nativeElement, {
      ...this.swiperParams,
      on: {
        init: () => {
          this.startSlideAutoPlayTimer();
        },
        slideChange: () => {
          // this.progress = 0;
          // setInterval(() => {
          //   this.progress += 0.01;
          //   if (this.progress > 1) {
          //     setTimeout(() => {}, 3000);
          //   }
          // }, 50);
          this.slideIndex = this.swiper.activeIndex; // Actualiza el índice del slide actual
        },
        reachEnd: () => {
          this.stopAutoPlay();
          this.restart = true; // Indicate restart option
        },
      },
    });
  }

  onTest() {
    console.log('onTest');
  }

  togglePauseResume() {
    this.isPaused$.next(!this.isPaused$.value);
  }
  onNext() {
    this.swiper.slideNext();
  }
  onPrev() {
    this.swiper.slidePrev();
  }

  startSlideAutoPlayTimer() {

    this.progress = 0;
    setInterval(() => {
      this.progress += 0.01;
      if (this.progress > 1) {
        setTimeout(() => {}, 3000);
      }
    }, 50);

    this.autoPlaySubscription = this.isPaused$
      .pipe(
        switchMap((isPaused) => {
          if (isPaused) {
            return EMPTY;
          } else {
            return interval(3000);
          }
        }), // Emit every 3 seconds if not paused
        filter(() => !this.isPaused$.value), // Ensure still not paused
        takeWhile(() => {
          return this.swiper.activeIndex !== this.swiper.slides.length - 1; // Allow restart
        }) // Continue until last slide
      )
      .subscribe(() => {
        this.swiper.slideNext(); // Advance to the next slide
      });
  }

  ngOnDestroy() {
    this.autoPlaySubscription?.unsubscribe(); // Cleanup
  }

  onRestart() {
    this.autoPlaySubscription?.unsubscribe();
    this.swiper.slideTo(0);
    this.startSlideAutoPlayTimer();
    this.restart = false;
    this.togglePauseResume();
  }

  //! review this function
  stopAutoPlay() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
