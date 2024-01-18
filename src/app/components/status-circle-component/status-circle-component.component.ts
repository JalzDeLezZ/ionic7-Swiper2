import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-status-circle',
  templateUrl: './status-circle-component.component.html',
  styleUrls: ['./status-circle-component.component.scss'],
})
export class StatusCircleComponent {
  @Input() api: number[] = [];
  swiperCurrentIndex: number;

  constructor() {
    this.swiperCurrentIndex = 0; // Initialize it with a default value
  }

  calculateCircleDasharray(numberOfElements: number): number {
    const circleCircumference = 2 * Math.PI * 48;
    return circleCircumference / (numberOfElements * 2); // Adjust the calculation
  }

  calculateCircleDashoffset(numberOfCompletedElements: number, circleElement: HTMLElement): number {
    const dashLength = this.calculateCircleDasharray(this.api.length);
    const strokeWidth = Number(circleElement.getAttribute('stroke-width'));
    return -dashLength * numberOfCompletedElements - strokeWidth / 2; // Adjust the calculation
  }
}
/* {
  @Input() api: number[] = [];
  swiperCurrentIndex: number;
  @ViewChild('circle') circleElement: ElementRef;

  constructor() {
    this.swiperCurrentIndex = 0; // Initialize it with a default value
  }

  calculateCircleDasharray(numberOfElements: number): number {
    const circleCircumference = 2 * Math.PI * 48;
    return circleCircumference / numberOfElements;
  }

  calculateCircleDashoffset(numberOfCompletedElements: number): number {
    console.log("🚀 ~ StatusCircleComponent ~ calculateCircleDashoffset ~ this.circleElement:", this.circleElement)
    const dashLength = this.calculateCircleDasharray(this.api.length);
    const strokeWidth = Number(this.circleElement.nativeElement.getAttribute('stroke-width'));
    return dashLength * numberOfCompletedElements + strokeWidth / 2;
  }
} */
/* {
  @Input() api: number[] = [];
  swiperCurrentIndex: number;
  @ViewChild('circle') circleElement: ElementRef;

  constructor() {
    this.swiperCurrentIndex = 0; // Initialize it with a default value
  }
  calculateCircleDasharray(numberOfElements: number): number {
    const circleCircumference = 2 * Math.PI * 48;
    const dashLength = circleCircumference / numberOfElements; // Now explicitly a number
    return dashLength; // Return the number, not a string
  }

  calculateCircleDashoffset(numberOfCompletedElements: number): number {
    const dashLength = Number(this.calculateCircleDasharray(this.api.length));
    const strokeWidth = Number(this.circleElement.nativeElement.getAttribute('stroke-width'));
    return (dashLength * numberOfCompletedElements) - (strokeWidth / 2);
  }

}
 */