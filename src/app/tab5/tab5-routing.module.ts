import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxParticlesModule } from "@tsparticles/angular";

import { Tab5Page } from './tab5.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),NgxParticlesModule],
  exports: [RouterModule],
})
export class Tab5PageRoutingModule {}
