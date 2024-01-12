import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab9VideoPage } from './tab9-video.page';

const routes: Routes = [
  {
    path: '',
    component: Tab9VideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab9VideoPageRoutingModule {}
