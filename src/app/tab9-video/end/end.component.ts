import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss'],
})
export class EndComponent implements OnInit {
  videoItems = [
    {
      name: 'Video two',
      src: '/assets/video/reel2.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Video one',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
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
  constructor(
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}
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

  ionViewDidEnter() {
    this.data.play();
  }

  nextVideo() {
    console.log('nextVideo');
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

  public get progressValue(): number {
    return this.data?.currentTime
      ? this.data.currentTime / this.data.duration
      : 0;
  }
}
