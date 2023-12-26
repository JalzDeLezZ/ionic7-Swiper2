import { AfterViewInit, Component, ElementRef, OnChanges, ViewChild } from '@angular/core';
import { story_adds_api_responce } from 'src/assets/data/api1';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements AfterViewInit , OnChanges {
  public progress = 0;
  public index_slide = 0;
  story_adds = story_adds_api_responce;
  flag_showMore = true;

  //! https://swiperjs.com/swiper-api

  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;

  swiper!: Swiper;

  swiperParams: SwiperOptions = {
    speed: 400,
  };

  constructor() {
    /* setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          // this.progress = 0;
          this.swiper.slideNext();
        }, 1000);
      }
    }, 50); */
  }

  // detect when index_slide changes
  ngOnChanges() {
    console.log('ngOnChanges');

  }

  ngAfterViewInit() {
    this.swiper = new Swiper(
      this.swiperElement.nativeElement,
      {
        ...this.swiperParams,
        on: {
          init: () => {
            console.log('swiper initialized');
            setInterval(() => {
              this.swiper.slideNext(); // Avanza al siguiente slide
            }, 3000); // Intervalo de tiempo en milisegundos (en este caso, 3 segundos)
          },
          slideChange: () => {
            console.log('slide changed');
            this.index_slide = this.swiper.activeIndex; // Actualiza el índice del slide actual
          },
          reachEnd: () => {
            console.log('Se ha alcanzado el último slide');
            // Aquí puedes hacer lo que necesites cuando se haya alcanzado el último slide
          },
        },
      }
    );
  }

  onInitt() {
    this.swiper = new Swiper(
      this.swiperElement.nativeElement,
      {
        ...this.swiperParams,
        on: {
          init: () => {
            console.log('swiper initialized');
          },
          slideChange: () => {
            console.log('slide changed');
            this.index_slide = this.swiper.activeIndex; // Actualiza el índice del slide actual
          },
        },
      }
    );
  }

  onTest() {
    const current_timer = this.swiper.params.autoplay;
    console.log(current_timer);
  }
}
