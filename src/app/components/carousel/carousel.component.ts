import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
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
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() api_item: any;

  //? SWIPER
  swiper?: Swiper;
  @ViewChild('swiper', { static: true }) swiperEl!: ElementRef | any;

  swiperParams: SwiperOptions = {
    loop: true,
    slidesPerView: 2,
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
        console.log('Init');
      },
      slideChange: () => {
        console.log('🚀 ~ CarouselComponent ~ init ~ slideChange:');
      },
      reachEnd: () => {
        console.log('🚀 ~ CarouselComponent ~ reachEnd:');
      },
    },
  };
  swiperParamsx: SwiperOptions = {
    loop: true,
    injectStyles: [
      `
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
      background: orange;
    }
    `,
    ],
    pagination: {
      clickable: true,
      renderBullet: (index: any, className: any) => {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  };
  constructor() {}

  ngOnInit() {
    return;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // and now initialize it
      this.swiperEl.nativeElement.initialize(); //✅

      this.swiper = this.swiperEl.nativeElement.swiper; //✅

      console.log(this.swiper, '@@@@@@');
      this.swiper.params = {
        ...this.swiper.params,
        ...this.swiperParamsx,
      };
      this.swiper.autoplay.start(); //✅

      this.swiper.on('init', () => {
        console.log('🚀 ~ CarouselComponent ~ init ~ init:');
      });
      this.swiper.on('slideChange', () => {
        console.log('🚀 ~ CarouselComponent ~ slideChange ~ slideChange:');
      });
      this.swiper.on('reachEnd', () => {
        console.log('🚀 ~ CarouselComponent ~ reachEnd ~ reachEnd:');
      });
      this.swiper.update(); //✅
    }, 1000);
    /*
    this.swiperEl.nativeElement.passedParams = {
      ...this.swiperEl.nativeElement.passedParams,
      ...this.swiperParams,
    };

    console.log(this.swiperEl.nativeElement, '@@@@@@');

    setTimeout(() => {
      this.swiperEl.nativeElement.initialize(); //✅


      this.swiper = this.swiperEl.nativeElement.swiper; //✅


      Object.assign(this.swiperEl.nativeElement.swiper, this.swiperParams); //✅

      // this.swiperEl.nativeElement.swiper.autoplay.start(); ✅
      this.swiper.autoplay.start(); //✅
      this.swiper.update(); //✅

      this.swiperEl.nativeElement.swiper.update();
    }, 1000);

    setTimeout(() => {
      return;
    }, 3000); */
  }
  onUpdate() {
    // this.swiper.update();
    this.swiperEl.nativeElement.swiper.update();
  }
}
