import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab8TriviaPageRoutingModule } from './tab8-trivia-routing.module';

import { Tab8TriviaPage } from './tab8-trivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab8TriviaPageRoutingModule
  ],
  declarations: [Tab8TriviaPage]
})
export class Tab8TriviaPageModule {}
