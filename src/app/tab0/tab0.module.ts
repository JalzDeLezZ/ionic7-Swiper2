import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab0PageRoutingModule } from './tab0-routing.module';

import { Tab0Page } from './tab0.page';
import { ComponetsModule } from './components/componets.module';
import { LengthTextRegulationPipe } from '../pipes/length-text-regulation.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab0PageRoutingModule,
    ComponetsModule,
  ],
  declarations: [Tab0Page, LengthTextRegulationPipe],
})
export class Tab0PageModule {}
