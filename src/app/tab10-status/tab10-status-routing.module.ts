import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab10StatusPage } from './tab10-status.page';

const routes: Routes = [
  {
    path: '',
    component: Tab10StatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab10StatusPageRoutingModule {}
