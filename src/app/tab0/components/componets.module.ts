import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyImageComponent } from './only-image/only-image.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormAddComponent } from './form-add/form-add.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LinkRedirectComponent } from './link-redirect/link-redirect.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    OnlyImageComponent,
    FormAddComponent,
    CarouselComponent,
    LinkRedirectComponent,
    MovieComponent,
  ],
  exports: [
    OnlyImageComponent,
    FormAddComponent,
    CarouselComponent,
    LinkRedirectComponent,
    MovieComponent,
  ],
})
export class ComponetsModule {}
