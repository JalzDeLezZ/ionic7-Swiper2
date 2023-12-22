import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements AfterViewInit {
  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;

  swiper!: Swiper;

  swiperParams: SwiperOptions = {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
      delay: 1000,
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
  }


  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperElement.nativeElement, this.swiperParams);
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
