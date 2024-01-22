import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthTextRegulationPipe } from './length-text-regulation.pipe';



@NgModule({
  declarations: [
    LengthTextRegulationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LengthTextRegulationPipe
  ]
})
export class MpipesModule { }
