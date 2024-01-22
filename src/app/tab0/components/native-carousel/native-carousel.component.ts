import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-native-carousel',
  templateUrl: './native-carousel.component.html',
  styleUrls: ['./native-carousel.component.scss'],
})
export class NativeCarouselComponent implements OnInit, AfterViewInit {
  @Input() api_item: any;
  @Output() sendChildEvent = new EventEmitter<{
    value: string;
    type: string;
  }>();

  @ViewChild('swiperElement', { static: false }) swiperElement!: ElementRef;
  swiper!: Swiper;

  swiperParams: SwiperOptions = {
    init: false,
    initialSlide: 0,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60,
      stretch: 140,
      depth: 400,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  constructor() {}

  ngOnInit() {
    return;
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.swiper = new Swiper(
      this.swiperElement.nativeElement,
      this.swiperParams
    );
    setTimeout(() => {
      this.swiper.init();
      this.swiper.on('reachEnd', () => {
        this.childEvent({ value: 'end', type: 'carousel' });
      });
    }, 150);
    return;
  }

  ionViewDidEnter() {
    console.log('ionViewWillEnter');
  }

  childEvent(value: IEmit) {
    this.sendChildEvent.emit(value);
  }
}

export interface IEmit {
  value: string;
  type: string;
}
