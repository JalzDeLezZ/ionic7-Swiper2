import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab10StatusPageRoutingModule } from './tab10-status-routing.module';

import { Tab10StatusPage } from './tab10-status.page';
import { StatusCircleComponent } from '../components/status-circle-component/status-circle-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab10StatusPageRoutingModule
  ],
  declarations: [Tab10StatusPage, StatusCircleComponent]
})
export class Tab10StatusPageModule {}
