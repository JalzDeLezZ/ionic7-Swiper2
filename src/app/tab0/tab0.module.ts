import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab0PageRoutingModule } from './tab0-routing.module';

import { Tab0Page } from './tab0.page';
import { StatusCircleComponent } from '../components/status-circle-component/status-circle-component.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Tab0PageRoutingModule],
  declarations: [Tab0Page, StatusCircleComponent],
})
export class Tab0PageModule {}
