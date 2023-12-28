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

/* @Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
}) */
export class Tab3Page implements AfterViewInit, OnChanges, OnDestroy {
  public progress = 1; // progress bar value 0 to 1, decimal value
  public slideIndex = 0;

  public isPaused = true;
  private onDestroy$ = new Subject<void>();
  private pauseResume$ = new Subject<boolean>();
  private pauseResumeState = new BehaviorSubject<boolean>(true); // Initially paused
  private autoPlaySubscription?: Subscription;
  isPaused$ = new BehaviorSubject<boolean>(true); // Initially paused

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
    this.isPaused$.next(!this.isPaused$.value);
  }

  onNext() {
    this.swiper.slideNext();
  }
  onPrev() {
    this.swiper.slidePrev();
  }

  startAutoPlay() {
    /* this.autoPlaySubscription = this.pauseResumeState
      .pipe(
        switchMap((isPaused) => {
          return isPaused
            ? EMPTY
            : interval(100).pipe(
                takeWhile(() => this.progress < 1),
                takeUntil(this.pauseResumeState.pipe(filter((paused) => paused)))
              );
        })
      )
      .subscribe(() => {
        this.progress += 0.01;
      }); */
      this.autoPlaySubscription = this.isPaused$.pipe(
        switchMap((isPaused) => (isPaused ? EMPTY : interval(3000))),
        filter(() => !this.isPaused$.value), // Ensure not paused
        takeWhile(() => /* condition for continuing autoplay */
          this.slideIndex < this.story_adds.length - 1
        )
      ).subscribe(() => {
        // Advance slides here
        this.swiper.slideNext();
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
