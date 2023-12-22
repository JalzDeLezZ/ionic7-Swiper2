import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';

// register Swiper custom elements
register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements AfterViewInit {
  swiperParams: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      // init() {
      //   console.log('swiper initialized');
      // },
    },
  };

  params = {
    modules: [Navigation, Pagination],

    // array with CSS styles
    injectStyles: [
      `
      :host(.red) .swiper-wrapper {
        background-color: red;
      }
      `,
    ],

    // array with CSS urls
    injectStylesUrls: ['path/to/one.css', 'path/to/two.css'],
  };


  @ViewChild('swiper', { static: true }) swiperEl!: ElementRef | any;

  constructor() {}

  onTest() {

    // and now initialize it
    this.swiperEl.nativeElement.initialize(); //* This code works well ✅


    //set all parameters to Swiper element

    // now we need to assign all parameters to Swiper element
    // Object.assign(this.swiperEl, this.swiperParams); //! this code doesn't work well ❌
    // this.swiperEl.nativeElement.slidesPerView = 3; // ✅✅✅

    this.swiperEl.nativeElement.passedParams = this.swiperParams; //✅
    this.swiperEl.nativeElement.swiperParams = this.swiperParams; //✅
    this.swiperEl.nativeElement.config = this.swiperParams; //✅


    console.log('ionViewDidEnter', this.swiperEl.nativeElement.swiper);
    console.log(this.swiperEl);
    console.log(this.swiperEl.nativeElement);

    this.swiperEl.nativeElement.swiper.params = {
      ...this.swiperEl.nativeElement.swiper.params,
      ...this.swiperParams,
    };
    console.log("🚀 ~ file: tab1.page.ts:60 ~ Tab1Page ~ ionViewDidEnter ~ this.swiperEl.nativeElement.swiper.params:", this.swiperEl.nativeElement.swiper.params)

    // and now initialize and update it
    this.swiperEl.nativeElement.swiper.update();
  }

  ionViewDidEnter() {

    // and now initialize it
    this.swiperEl.nativeElement.initialize(); //* This code works well ✅


    //set all parameters to Swiper element

    // now we need to assign all parameters to Swiper element
    // Object.assign(this.swiperEl, this.swiperParams); //! this code doesn't work well ❌
    // this.swiperEl.nativeElement.slidesPerView = 3; // ✅✅✅

    this.swiperEl.nativeElement.passedParams = this.swiperParams; //✅
    this.swiperEl.nativeElement.swiperParams = this.swiperParams; //✅
    this.swiperEl.nativeElement.config = this.swiperParams; //✅


    console.log('ionViewDidEnter', this.swiperEl.nativeElement.swiper);
    console.log(this.swiperEl);
    console.log(this.swiperEl.nativeElement);

    this.swiperEl.nativeElement.swiper.params = {
      ...this.swiperEl.nativeElement.swiper.params,
      ...this.swiperParams,
    };
    console.log("🚀 ~ file: tab1.page.ts:60 ~ Tab1Page ~ ionViewDidEnter ~ this.swiperEl.nativeElement.swiper.params:", this.swiperEl.nativeElement.swiper.params)

    // and now initialize and update it
    this.swiperEl.nativeElement.swiper.update();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    // this.swiper?.update(); // Use optional chaining
  }

  onUpdate() {
    console.log('onUpdate');
    // this.swiperEl.nativeElement?.update(); //! this code doesn't work well ❌


    // if it was initialized with attributes
    // this.swiperEl.nativeElement.setAttribute('slides-per-view', '3'); // ✅

    // or if it was initialized with props
    this.swiperEl.nativeElement.slidesPerView = 3; // ✅
  }

  onSlideNext() { // ✅ SUCCESS
    console.log('onSlideNext');
    this.swiperEl.nativeElement.swiper.slideNext();
  }
}
