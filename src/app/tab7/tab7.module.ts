import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab7PageRoutingModule } from './tab7-routing.module';

import { Tab7Page } from './tab7.page';
import { NgxParticlesModule } from '@tsparticles/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab7PageRoutingModule,
    NgxParticlesModule
  ],
  declarations: [Tab7Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab7PageModule {}
