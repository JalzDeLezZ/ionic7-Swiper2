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
} from 'rxjs';
import { story_adds_api_responce } from 'src/assets/data/api1';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { EMPTY } from 'rxjs';

export class Tab3Page implements AfterViewInit, OnChanges, OnDestroy {
  public progress = 1; // progress bar value 0 to 1, decimal value
  public slideIndex = 0;

  public isPaused = true;
  private onDestroy$ = new Subject<void>();
  private pauseResume$ = new Subject<boolean>();
  private pauseResumeState = new BehaviorSubject<boolean>(true); // Initially paused
  private autoPlaySubscription?: Subscription;

  story_adds = story_adds_api_responce;
  flag_showMore = true;

  //! https://swiperjs.com/swiper-api

  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;

  swiper!: Swiper;

  swiperParams: SwiperOptions = {
    speed: 400,
  };

  constructor() {}

  // detect when index_slide changes
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.initSlide();
  }

  initSlide() {
    this.swiper = new Swiper(this.swiperElement.nativeElement, {
      ...this.swiperParams,
      on: {
        init: () => {
          this.startAutoPlay();
        },
        slideChange: () => {
          this.slideIndex = this.swiper.activeIndex; // Actualiza el índice del slide actual
        },
        reachEnd: () => {
          console.log('reachEnd');
          this.stopAutoPlay();
        },
      },
    });
  }

  onTest() {
    console.log('onTest');
  }

  togglePauseResume() {
    this.pauseResumeState.next(!this.pauseResumeState.value);
  }

  onNext() {
    this.swiper.slideNext();
  }
  onPrev() {
    this.swiper.slidePrev();
  }

  startAutoPlay() {
    //TODO This functios not work, fix it
    // Unsubscribe from any previous subscription
    /* this.autoPlaySubscription?.unsubscribe();

    this.autoPlaySubscription = this.pauseResumeState
      .pipe(filter((isPaused) => !isPaused))
      .subscribe(() => {
        if (this.slideIndex >= this.story_adds.length - 1) {
          // Reached last slide and not paused
          this.stopAutoPlay();
        }
      });

    this.pauseResumeState.pipe(
      takeUntil(this.onDestroy$),
      switchMap((isPaused) => (isPaused ? interval(3000) : EMPTY))
    ); */

    this.autoPlaySubscription?.unsubscribe(); // Unsubscribe from previous subscription

    this.autoPlaySubscription = this.pauseResumeState
      .pipe(
        takeUntil(this.onDestroy$),
        switchMap((isPaused) => (isPaused ? interval(3000) : EMPTY)),
        filter((_) => !this.isPaused) // Filter out emissions when paused
      )
      .subscribe(() => {
        interval(3000)
          .pipe(
            takeUntil(this.onDestroy$),
            takeWhile(() => this.isPaused),
            skipWhile(() => !this.isPaused)
          )
          .subscribe(() => {
            if (this.slideIndex < this.story_adds.length - 1) {
              this.slideIndex++;
              this.swiper.slideTo(this.slideIndex);
            } else {
              // Se llegó al último slide, puedes hacer lo que necesites aquí
              console.log('Se alcanzó el último slide.');
              // Detener el intervalo si se alcanza el último slide
              this.stopAutoPlay();
            }
          });
        // Suscribe la pausa o reanudación del intervalo
        this.pauseResume$.subscribe((isPaused: boolean) => {
          this.isPaused = isPaused;
        });
      });
  }

  stopAutoPlay() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }
}
