import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab9VideoPageRoutingModule } from './tab9-video-routing.module';

import { Tab9VideoPage } from './tab9-video.page';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { VdPlaterComponent } from './vd-plater/vd-plater.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { SafeResourceURLPipe } from '../pipes/safe-resource-url.pipe';
import { EndComponent } from './end/end.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab9VideoPageRoutingModule,
    VideoplayerComponent,
    // VdPlaterComponent,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  declarations: [
    Tab9VideoPage,
    SafeResourceURLPipe,
    VdPlaterComponent,
    EndComponent,
  ],
})
export class Tab9VideoPageModule {}
