import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
// import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { DomController } from '@ionic/angular';
import { story_adds_api_responce } from 'src/assets/data/api1';

// register Swiper custom elements
register();

/*
    Object.assign(swiperEl, params)

    swiperEl.initialize(); */

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit, AfterViewInit {
  story_adds = story_adds_api_responce;

  swiperParams: SwiperOptions = swiperParams2;

  @ViewChild('swiper', { static: true }) swiperEl!: ElementRef | any;

  constructor(private domCtrl: DomController, private renderer: Renderer2) {}

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    // this.swiper?.update(); // Use optional chaining
  }

  ngOnInit(): void {
    console.log(this.story_adds);
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');

    // and now initialize and update it
    this.swiperEl.nativeElement.initialize();

    //! XXX set all parameters to Swiper element

    this.swiperEl.nativeElement.swiperParams = {
      ...this.swiperEl.nativeElement.swiperParams,
      ...this.swiperParams,
    };
    this.swiperEl.nativeElement.passedParams = {
      ...this.swiperEl.nativeElement.passedParams,
      ...this.swiperParams,
    };

    //! XXX ------------------------------------

    // Updare ✅
    this.swiperEl.nativeElement.swiper.update();

    console.log(
      '🚀 ~ file: tab4.page.ts:79 ~ Tab4Page ~ ionViewDidEnter ~ this.swiperEl:',
      this.swiperEl
    );
  }
}

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

const swiperParams2: SwiperOptions = {
  loop: true,
  slidesPerView: 2,
};

const swiperParams: SwiperOptions = {
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
    background: #007aff;
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
