import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@Component({
  selector: 'app-videoplayer',
  standalone: true,
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
})
export class VideoplayerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    return;
  }
}
