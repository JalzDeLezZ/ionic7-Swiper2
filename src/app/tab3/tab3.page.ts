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

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements AfterViewInit, OnChanges, OnDestroy {
  public progress = 1; // progress bar value 0 to 1, decimal value
  public slideIndex = 0;

  isPaused$ = new BehaviorSubject<boolean>(false); // Initially paused
  // public isPaused = true;
  // private pauseResumeState = new BehaviorSubject<boolean>(true); // Initially paused
  // private pauseResume$ = new Subject<boolean>();
  private onDestroy$ = new Subject<void>();
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
          this.startSlideAutoPlayTimer();
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

  startSlideAutoPlayTimer() {
    this.autoPlaySubscription = this.isPaused$
      .pipe(
        switchMap((isPaused) => {
          return isPaused ? EMPTY : interval(3000);
        }), // Emit every 3 seconds if not paused
        filter(() => !this.isPaused$.value), // Ensure still not paused
        takeWhile(
          () => this.swiper.activeIndex !== this.swiper.slides.length - 1
        ) // Continue until last slide
      )
      .subscribe(() => {
        this.swiper.slideNext(); // Advance to the next slide
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
