import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent  implements OnInit {
  @Input() api_item;
  activeIndex = 0;
  data: any;

  constructor() { }

  ngOnInit() {return}

  videoPlayerInit(data: any) {
    this.data = data;
    // this.data
    //   .getDefaultMedia()
    //   .subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    // this.data
    //   .getDefaultMedia()
    //   .subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  ionViewDidEnter() {
    this.data.play();
  }

  // nextVideo() {
  //   console.log('nextVideo');
  //   this.activeIndex++;
  //   if (this.activeIndex === this.videoItems.length) {
  //     this.activeIndex = 0;
  //   }
  //   this.currentVideo = this.videoItems[this.activeIndex];
  // }
  // initVdo() {
  //   this.data.play();
  // }
  // startPlaylistVdo(item: any, index: number) {
  //   this.activeIndex = index;
  //   this.currentVideo = item;
  // }

  public get progressValue(): number {
    return this.data?.currentTime
      ? this.data.currentTime / this.data.duration
      : 0;
  }
}
