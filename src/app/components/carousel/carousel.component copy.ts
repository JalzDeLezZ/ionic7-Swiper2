import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

//? SWIPER
import { A11y, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Swiper from 'swiper';


export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() api_item;
  sliders = slides;

  @ViewChild('swiper', { static: true }) swiperEl!: ElementRef | any;

  swiper?: Swiper;


  public swiperParams?: SwiperOptions = prop2;

  public swiperParamsx: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 20,
    navigation: false,
    pagination: {clickable: true, dynamicBullets: true},
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: "auto",
        centeredSlides: false
      },
    }
  }

  params = {
    injectStyles: [`
    .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: rgba(0, 0, 0, 0.2);
    }

    .swiper-pagination-bullet-active {
      color: #fff;
      background: #007aff;
    }
    `],
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  }


  constructor() {

  }

  ngOnInit() {
  // this._initSwiper()

    return;
  }
  /*
  //! THREE
  private _initSwiper() {
    const options: SwiperOptions = {
      pagination: { clickable: true },
      slidesPerView: 1,
      // breakpoints: this._getBreakpoints(), // In case you wish to calculate base on the `items` length
    }

    const swiperEl = this._swiperRef.nativeElement
    Object.assign(swiperEl, options)

    swiperEl.initialize()

    if (this.swiper) this.swiper.currentBreakpoint = false // Breakpoint fixes
    this.swiper = this._swiperRef.nativeElement.swiper

    this.swiper.off('slideChange') // Avoid multiple subscription, in case you wish to call the `_initSwiper()` multiple time

    this.swiper.on('slideChange', () => { // Any change subscription you wish
      console.log('slideChange');
      // this.infinitLoad?.triggerOnScroll()
    })
  } */

  ngAfterViewInit(): void {
    // this.swiper = this.swiperRef?.nativeElement.swiper;
    // this.swiper =new Swiper(this.swiperRef?.nativeElement, this.swiperParamsx);


    // // @ts-ignore
    // this.el.nativeElement.initialize();
    //initialize swiper

    console.log(this.swiperEl, '@@@@');

    // this.swiper =new Swiper(this.swiperEl?.nativeElement, this.swiperParams);

    setTimeout(() => {
      this.swiper = new Swiper(this.swiperEl.nativeElement);
      this.swiper.init();

      // this.swiperEl.nativeElement.initialize();
    }, 1000);
    return;
  }

  onActiveIndexChange() {
    this.swiper.init();
    this.swiper.update();
    console.log(this.swiper);
  }
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const slides =  [
  'Test 1',
  'Test 2',
  'Test 3',
  'Test 4',
  'Test 5',
  'Test 6',
  'Test 7',
  'Test 8',
  'Test 9',
]

const prop1 = {
  initialSlide: 2,
  modules: [Navigation, Pagination, A11y, Mousewheel],
  autoHeight: true,
  spaceBetween: 20,
  navigation: true,
  pagination: { clickable: true, dynamicBullets: true },
  slidesPerView: 2,
  centeredSlides: true,
  breakpoints: {
    400: {
      slidesPerView: 'auto',
      centeredSlides: false,
    },
  },
};

const prop2 = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  on: {
    init() {
      console.log('swiper initialized');
    },
  },
};
