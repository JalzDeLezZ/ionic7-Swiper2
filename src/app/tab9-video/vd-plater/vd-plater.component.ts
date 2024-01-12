import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';

@Component({
  // standalone: true,
  selector: 'app-vd-plater',
  templateUrl: './vd-plater.component.html',
  styleUrls: ['./vd-plater.component.scss'],
  // imports: [
  //   CommonModule,
  //   VgCoreModule,
  //   VgControlsModule,
  //   VgOverlayPlayModule,
  //   VgBufferingModule,
  // ],
})
export class VdPlaterComponent implements OnInit {

  myUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://wwww...');

  videoItems = [
    {
      name: 'Video one',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Video two',
      src: '/assets/video/reel2.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Video three',
      // this.sanitizer.bypassSecurityTrustResourceUrl()
      //!X CORS ERROR: src: 'https://exit109.com/~dnn/clips/RW20seconds_1.mp4',
      // src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      src: 'https://static.videezy.com/system/resources/previews/000/012/040/original/Fire_17_-_45s_-_4k_res.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Video three',
      src: '/assets/video/pexels.mp4',
      type: 'video/mp4',
    },
    /* {
      name: 'Video three',
      // src: 'https://www.youtube.com/embed/W4lMeXB6_G4?si=3OzyqfJzMC_b3B60',
      // src: 'https://www.youtube-nocookie.com/embed/W4lMeXB6_G4?si=nFznkeJ8hD_ZJjEh',
      type: 'video/mp4',
    }, */
  ];
  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data: any;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    return;
  }
  videoPlayerInit(data: any) {
    this.data = data;
    this.data
      .getDefaultMedia()
      .subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data
      .getDefaultMedia()
      .subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
  nextVideo() {
    this.activeIndex++;
    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }
    this.currentVideo = this.videoItems[this.activeIndex];
  }
  initVdo() {
    this.data.play();
  }
  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }


  public get progressValue() : number {
    // return this.data?.currentTime ? (this.data.currentTime / this.data.duration) * 100 + '%' : '0%';
    return this.data?.currentTime ? (this.data.currentTime / this.data.duration) : 0;
  }

}
