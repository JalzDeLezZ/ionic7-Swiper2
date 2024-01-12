import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab9-video',
  templateUrl: './tab9-video.page.html',
  styleUrls: ['./tab9-video.page.scss'],
})
export class Tab9VideoPage implements OnInit {
  // medias = [
  //   {
  //     name: 'Video one',
  //     url: 'https://exit109.com/~dnn/clips/RW20seconds_1.mp4',
  //     type: 'video/mp4',
  //   },
  //   {
  //     name: 'Video two',
  //     url: '/assets/video/reel1.mp4',
  //     type: 'video/mp4',
  //   },
  //   {
  //     name: 'Video three',
  //     url: '/assets/video/pexels.mp4',
  //   }
  // ];

  // url = 'https://www.youtube-nocookie.com/embed/W4lMeXB6_G4?si=nFznkeJ8hD_ZJjEh';
  // url = '/assets/video/reel1.mp4';
  url: 'https://exit109.com/~dnn/clips/RW20seconds_1.mp4';
  // url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
  // url: '/assets/video/reel2.mp4';

  // url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

  constructor() { }

  ngOnInit() {
    return;
  }
  /* data: any;
  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];

  videoPlayerInit(data: any) {
    console.log("🚀 ~ Tab9VideoPage ~ videoPlayerInit ~ data:", data)
    // data.play();
  }

  initVdo() {
    // this.data.play();
  }

  nextVideo() {
    this.activeIndex++;
    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }
    this.currentVideo = this.videoItems[this.activeIndex];
  } */
}
