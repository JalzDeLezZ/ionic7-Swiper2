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
import { Navigation } from 'swiper/modules';

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
          //! this.startSlideAutoPlayTimer(); //UNCOMMENT
        },
        slideChange: () => {
          this.progress = 0;
          this.slideIndex = this.swiper.activeIndex;
        },
        reachEnd: () => {
          this.progress = 1; // Reset progress on reachEnd
          this.ionViewDidLeave();
          this.restart = true;
        },
      },
    });
    this.slideChange$ = fromEvent(this.swiper.el, 'slideChange');

    merge(this.slideChange$, this.progressReset$).subscribe(() => {
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
    this.swiper.slideNext();
  }
  onPrev() {
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
    console.log('ngOnDestroy');
  }

  ionViewDidLeave() {
    console.log(
      '🚀 ~ file: tab3.page.ts:145 ~ Tab3Page ~ ionViewDidLeave ~ ionViewDidLeave:'
    );
    this.onDestroy$.next();
    this.onDestroy$.complete();
    this.autoPlaySubscription?.unsubscribe(); // Added cleanup
    this.slideChangeSubscription?.unsubscribe(); // Added cleanup
  }

  onRestart() {
    this.autoPlaySubscription?.unsubscribe();
    this.swiper.slideTo(0);
    this.startSlideAutoPlayTimer();
    this.restart = false;
    this.togglePauseResume();
  }

  // ? CAROUSEL SECTION
  // ? CAROUSEL SECTION
  // ? CAROUSEL SECTION

//   injectStylesC = [
//     `

// .swiper-pagination-bullet {
//   width: 20px;
//   height: 20px;
//   text-align: center;
//   line-height: 20px;
//   font-size: 12px;
//   color: orange;
//   opacity: 1;
//   background: green;
// }
// .swiper-pagination-bullet-active {
//   color: yellow !important;
//   background: #ff0003 !important;
// }
//     `,
//   ];

  paginationC = {
    clickable: true,
    renderBullet: (index: any, className: any) => {
      return '<span class="' + className + '">' + (index + 1) +'</span>';//
    },
  };

  //!!! example
  public config: SwiperOptions = {
    modules: [Navigation],
    navigation: true,
    slidesPerView: 1,
    injectStyles: [
      `
        :host .swiper-wrapper {background-color: red;}
        :root {--swiper-theme-color: red;}
      `,
    ],
};

  // @ViewChild('swiperCarousel', { static: false }) swiperCarousel!: ElementRef;
  // swiper2!: Swiper;

  // initCarouselSlide() {
  //   this.swiper2 = new Swiper(this.swiperCarousel.nativeElement, {
  //     ...this.swiperParams,
  //   });
  // }

  /* var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 200,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  }); */
}
