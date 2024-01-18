import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { only_images_api_responce, story_adds_api_responce } from 'src/assets/data/api1';
import { DomController } from '@ionic/angular';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
// import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { only_images_api_responce } from 'src/assets/data/api1';
// import Swiper from 'swiper';
// import { SwiperOptions } from 'swiper/types';

export class Tab0Page implements AfterViewInit {
  api = only_images_api_responce;
  swiper!: Swiper;
  ionProgressBar = 0; // 0 - 1
  slideIndex = 0;

  @ViewChild('progressCircle', { static: false }) progressCircle!: ElementRef;
  @ViewChild('progressContent', { static: false }) progressContent!: ElementRef;
  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.chargeSwiper();
  }

  chargeSwiper() {
    const swiperProps: SwiperOptions = {
      loop: false,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        // disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        autoplayTimeLeft: (swiper, time, progress) => {
          this.ionProgressBar = 1 - progress;
            this.progressCircle.nativeElement.style.setProperty(
              '--progress',
              1 - progress
            );
            this.progressContent.nativeElement.textContent = `${Math.ceil(
              time / 1000
            )}s`;
        },
        reachEnd: () => {
          this.swiper.on('autoplayTimeLeft', (s, t, p) => {
            if (t < 300) {
              this.ionProgressBar = 1;
              this.swiper.autoplay.stop();
            }
          });
        },
      },
    }

    this.swiper = new Swiper(this.swiperElement.nativeElement, swiperProps);

    this.swiper.on('slideChange', () => {
      this.slideIndex = this.swiper.activeIndex;
    });
  }

}
