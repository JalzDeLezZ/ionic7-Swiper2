import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-image',
  templateUrl: './only-image.component.html',
  styleUrls: ['./only-image.component.scss'],
})
export class OnlyImageComponent  implements OnInit {
  @Input() api_item;

  constructor() { }

  ngOnInit() {return}

}
