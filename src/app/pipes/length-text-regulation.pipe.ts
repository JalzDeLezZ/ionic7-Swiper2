import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthTextRegulation'
})
export class LengthTextRegulationPipe implements PipeTransform {

  transform(value: string): number {
    let length = value.length;
    if (length > 150) {
      return 1;
    } else {
      return 0;
    }
  }
}
