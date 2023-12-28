import { AfterViewInit, Component, ElementRef, OnChanges, ViewChild } from '@angular/core';
import { story_adds_api_responce } from 'src/assets/data/api1';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

/* @Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
}) */
export class Tab3Page implements AfterViewInit , OnChanges {
  public progress = 0;
  public index_slide = 0;
  public pause = false;
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
    console.log('ngAfterViewInit');
    /* this.swiper = new Swiper(
      this.swiperElement.nativeElement,
      {
        ...this.swiperParams,
        on: {
          init: () => {
            /* console.log('swiper initialized');
            setInterval(() => {
              this.swiper.slideNext(); // Avanza al siguiente slide
            }, 3000) * /; // Intervalo de tiempo en milisegundos (en este caso, 3 segundos)
            this.story_adds.forEach((e, i) => {
              this.startSlideTimer(i);
            });

          },
          slideChange: () => {
            /* console.log('slide changed');
            this.index_slide = this.swiper.activeIndex; // Actualiza el índice del slide actual * /
            this.index_slide = this.swiper.activeIndex; // Actualiza el índice del slide actual
            const currentIndex = this.swiper.activeIndex;
            this.resetSlideProgress();
            this.startSlideTimer(currentIndex);

          },
          reachEnd: () => {
            console.log('Se ha alcanzado el último slide');
            // Aquí puedes hacer lo que necesites cuando se haya alcanzado el último slide
          },
        },
      }
    ); */
  }

  onInitt() {
    this.swiper = new Swiper(
      this.swiperElement.nativeElement,
      {
        ...this.swiperParams,
        on: {
          init: () => {

            /* console.log('swiper initialized');
            setInterval(() => {
              this.swiper.slideNext(); // Avanza al siguiente slide
            }, 3000) */; // Intervalo de tiempo en milisegundos (en este caso, 3 segundos)
            //? to verify
            // this.story_adds.forEach((e, i) => {
            //   this.startSlideTimer(i);
            // });

          },
          slideChange: () => {
            /* console.log('slide changed');
            this.index_slide = this.swiper.activeIndex; // Actualiza el índice del slide actual */
            //? to verify
            this.index_slide = this.swiper.activeIndex; // Actualiza el índice del slide actual
            console.log("🚀 ~ file: tab3.page.ts:105 ~ Tab3Page ~ onInitt ~ this.index_slide:", this.index_slide)

            // const currentIndex = this.swiper.activeIndex;
            // this.resetSlideProgress();
            // this.startSlideTimer(currentIndex);

          },
          reachEnd: () => {
            console.log('Se ha alcanzado el último slide');
            // Aquí puedes hacer lo que necesites cuando se haya alcanzado el último slide
          },
        },
      }
    );
  }

  onTest() {
    const current_timer = this.swiper.params.autoplay;
    console.log(current_timer);
  }
  startSlideTimer(currentIndex : number) {
    const slide = this.story_adds[currentIndex];

    slide.progress = 0; // Reset the progress of the current slide


    const timer = setInterval(() => {
      slide.progress += 0.01; // Increase the progress

      // Move to the next slide when the end of the time is reached
      if (slide.progress >= 1) {
        if (slide.timer !== null) {
          clearInterval(slide.timer); // Stop the timer
          slide.timer = null; // Reset the timer to null
        }
        this.swiper.slideNext(); // Move to the next slide
      }
    }, 50); // Time interval in milliseconds

    slide.timer = timer as any; // Save the timer in the slide object
  }

  resetSlideProgress() {
    // Reset the progress and stop all timers
    this.story_adds.forEach(slide => {
      slide.progress = 0;
      if (slide.timer !== null) {
        clearInterval(slide.timer);
        slide.timer = null;
      }
    });
  }

  onPlayPause() {
    this.pause = !this.pause;
    if (this.pause) {
      this.swiper.autoplay.stop();
    } else {
      this.swiper.autoplay.start();
    }
  }

  onNext() {
    this.swiper.slideNext();
  }
  onPrev() {
    this.swiper.slidePrev();
  }
}
