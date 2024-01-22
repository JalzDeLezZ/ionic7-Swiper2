import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyImageComponent } from './only-image/only-image.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormAddComponent } from './form-add/form-add.component';
import { LinkRedirectComponent } from './link-redirect/link-redirect.component';
import { MovieComponent } from './movie/movie.component';
import { SwiperDirective } from 'src/app/directives/swiper.directive';
import { NativeCarouselComponent } from './native-carousel/native-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SwiperDirective,
  ],
  declarations: [
    OnlyImageComponent,
    FormAddComponent,
    NativeCarouselComponent,
    LinkRedirectComponent,
    MovieComponent,
  ],
  exports: [
    OnlyImageComponent,
    FormAddComponent,
    NativeCarouselComponent,
    LinkRedirectComponent,
    MovieComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponetsModule {}
