import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab8TriviaPage } from './tab8-trivia.page';

const routes: Routes = [
  {
    path: '',
    component: Tab8TriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab8TriviaPageRoutingModule {}
