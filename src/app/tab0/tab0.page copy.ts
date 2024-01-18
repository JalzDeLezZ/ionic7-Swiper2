// import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { only_images_api_responce, story_adds_api_responce } from 'src/assets/data/api1';
// import { DomController } from '@ionic/angular';
// import Swiper from 'swiper';
// import { SwiperOptions } from 'swiper/types';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { only_images_api_responce } from 'src/assets/data/api1';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

export class Tab0Page implements AfterViewInit {
  api = only_images_api_responce;

  //! https://swiperjs.com/swiper-api

  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;

  swiper!: Swiper;
  swiperCurrentIndex: number = 0;
  swiperProgress: number = 0;

  constructor() {}

  ngAfterViewInit() {
    const swiperParams: SwiperOptions = {
      loop: false,
      speed: 400,
      spaceBetween: 100,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on: {
        init: () => {},
        slideChange: () => {
          this.swiperCurrentIndex = this.swiper.activeIndex;
        },
        autoplayTimeLeft: (swiper, timeLeft, percentage) => {
          this.swiperProgress = 1 - percentage;
        },
      },
    };
    this.swiper = new Swiper(this.swiperElement.nativeElement, swiperParams);

    this.swiper.on('reachEnd', () => {
      this.swiper.autoplay.stop();
    })
    // this.swiper.on('progress', () => {
    //   console.log('progress', this.swiper.progress);
    //   this.swiperProgress = 1 - this.swiper.progress;
    // });
  }

  slideNext() {
    this.swiper.slideNext();
  }

  slidePrev() {
    this.swiper.slidePrev();
  }

  onUpdate() {
    this.swiper.params.slidesPerView = 3;
    this.swiper.update(); // Success to update
    console.log('onUpdate');
  }
}
