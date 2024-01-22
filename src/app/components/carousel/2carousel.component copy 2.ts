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
  @Input() api_item: any;

  //? SWIPER
  title = 'swiper-tutorial';
  swiper?: Swiper;
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  slides = slides;

  public config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 25,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      1280: {
        slidesPerView: 3.5,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: true,
      draggable: true,
    },
  };

  constructor() {}

  ngOnInit() {
    return;
  }

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;

    return;
  }
}

const slides: Array<{ title: string }> = [
  {
    title: 'Slide 1',
  },
  {
    title: 'Slide 2',
  },
  {
    title: 'Slide 3',
  },
  {
    title: 'Slide 4',
  },
  {
    title: 'Slide 5',
  },
  {
    title: 'Slide 6',
  },
  {
    title: 'Slide 7',
  },
  {
    title: 'Slide 8',
  },
];
