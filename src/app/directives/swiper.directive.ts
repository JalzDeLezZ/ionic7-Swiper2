/* eslint-disable @angular-eslint/directive-selector */
import { A11y, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[swiperElement]',
})
export class SwiperDirective implements AfterViewInit {
  private readonly swiperElement: HTMLElement;
  @Input() config?: SwiperOptions;

  constructor(private element: ElementRef<HTMLElement>) {
    this.swiperElement = element.nativeElement;
  }

  ngAfterViewInit(): void {
    Object.assign(this.element.nativeElement, this.config);
    //@ts-ignore - We ignore this because there is no initialize method on the HTMLElement
    this.element.nativeElement.initialize();
  }
}
