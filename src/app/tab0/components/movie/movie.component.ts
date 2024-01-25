import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() api_item;
  @Input() swiperCurrentIndex;
  @Input() arrayIndex;
  @Output() childEventCurrentProgressVideo = new EventEmitter<any>();
  @Output() childEventMovieEnd = new EventEmitter<any>();
  @Input() currentVideo: boolean = false;
  activeIndex = 0;
  data: VgApiService;

  constructor() {}

  ngOnInit() {
    return;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentVideo'] && changes['currentVideo'].currentValue) {
      setTimeout(() => {
        this.data.play();
      }, 1000);
    }
  }

  videoPlayerInit(data: VgApiService) {
    this.data = data;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(() => {
      if (this.swiperCurrentIndex !== this.arrayIndex) {
        this.data.pause();
      } else {
        this.data.play();
      }
    });
    this.data.getDefaultMedia().subscriptions.ended.subscribe(() => {
      this.childEventMovieEnd.emit(true);
    });

    // Suscribirse al evento timeUpdate
    this.data.getDefaultMedia().subscriptions.timeUpdate.subscribe(() => {
      this.childEventCurrentProgressVideo.emit(this.progressValue);
    });
  }
  ngAfterViewInit() {
    return;
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  public get progressValue(): number {
    return this.data?.currentTime
      ? this.data.currentTime / this.data.duration
      : 0;
  }
}
