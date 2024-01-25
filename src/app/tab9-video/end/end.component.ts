import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss'],
})
export class EndComponent implements OnInit {
  videoItems = videoItems;
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




















/*
! %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*/

const videoItems = [
  {
    name: 'Video two',
    src: 'https://vod-progressive.akamaized.net/exp=1706128840~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4026%2F18%2F470132138%2F2091294070.mp4~hmac=a819494ecd7d07d1aba4233c7be19c46f26fd5eebb9b7f8f406184d23c87fc8c/vimeo-prod-skyfire-std-us/01/4026/18/470132138/2091294070.mp4',
    type: 'video/mp4',
  },
  {
    name: 'Video one',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    type: 'video/mp4',
  },
  {
    name: 'Video CCC',
    src: 'https://media.vimejs.com/720p.mp4',
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
    src: 'https://vod-progressive.akamaized.net/exp=1706126698~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2713%2F21%2F538569339%2F2552350474.mp4~hmac=73399169a01e3c8231ee651ae315278eb3e7be570ed36ddfd721cd60eaad10fd/vimeo-prod-skyfire-std-us/01/2713/21/538569339/2552350474.mp4',
    type: 'video/mp4',
  },
  /* {
    name: 'Video three',
    // src: 'https://www.youtube.com/embed/W4lMeXB6_G4?si=3OzyqfJzMC_b3B60',
    // src: 'https://www.youtube-nocookie.com/embed/W4lMeXB6_G4?si=nFznkeJ8hD_ZJjEh',
    type: 'video/mp4',
  }, */
];