import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthTextRegulationPipe } from './length-text-regulation.pipe';
import { SafeResourceURLPipe } from './safe-resource-url.pipe';



@NgModule({
  declarations: [
    LengthTextRegulationPipe,
    SafeResourceURLPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LengthTextRegulationPipe,
    SafeResourceURLPipe
  ]
})
export class MpipesModule { }
