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
  merge,
  fromEvent,
  skipUntil,
  skipWhile,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  timer,
} from 'rxjs';
import { story_adds_api_responce } from 'src/assets/data/api1';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements AfterViewInit, OnChanges, OnDestroy {
  public progress = 0;
  public slideIndex = 0;

  public restart = false;
  isPaused$ = new BehaviorSubject<boolean>(false);
  private onDestroy$ = new Subject<void>();
  private autoPlaySubscription?: Subscription;
  timerSubscription?: Subscription;
  private slideChangeSubscription: any;
  //! https://swiperjs.com/swiper-api
  private progressReset$ = new Subject<void>();
  private progressInterval$ = interval(50);

  // myObservable = interval(1000); // Emits values every second
  // subscription = this.myObservable.subscribe((value) => {
  //   console.log('Received value:', value);
  // });
  slideChange$: any;

  story_adds = story_adds_api_responce;
  flag_showMore = true;

  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;
  swiper!: Swiper;
  swiperParams: SwiperOptions = { speed: 400 };

  constructor() {}

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
          this.progress = 0;
          this.slideIndex = this.swiper.activeIndex;
        },
        reachEnd: () => {
          this.progress = 0; // Reset progress on reachEnd
          this.stopAutoPlay();
          this.restart = true;
        },
      },
    });
    this.slideChange$ = fromEvent(this.swiper.el, 'slideChange');

    merge(this.slideChange$, this.progressReset$)
    .subscribe(() => {
      this.progress = 0;
    });


  }

  onTest() {
    console.log('onTest');
  }

  togglePauseResume() {
    this.isPaused$.next(!this.isPaused$.value);
  }
  onNext() {
    this.progress = 0; // Reset progress on slide change
    this.swiper.slideNext();
  }
  onPrev() {
    this.progress = 0; // Reset progress on slide change
    this.swiper.slidePrev();
    this.startSlideAutoPlayTimer(); // Restart autoplay if not paused

  }

  startSlideAutoPlayTimer() {
    if (this.isPaused$.value) {
      return; // Don't start if paused
    }

    this.autoPlaySubscription = interval(3000)
      .pipe(
        takeUntil(this.onDestroy$),
        filter(() => !this.isPaused$.value),
        filter(() => this.slideIndex !== this.story_adds.length - 1)
      )
      .subscribe(() => {
        this.swiper.slideNext();
      });
    this.slideChangeSubscription = interval(30)
      .pipe(
        takeUntil(this.onDestroy$),
        filter(() => !this.isPaused$.value),
        tap(() => {
          this.progress += 0.01;
          if (this.progress >= 1) {
            this.progressReset$.next(); // Trigger progress reset
          }
        })
      )
      .subscribe();

  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
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

    this.autoPlaySubscription?.unsubscribe();
    this.slideChangeSubscription.unsubscribe();
  }

}
