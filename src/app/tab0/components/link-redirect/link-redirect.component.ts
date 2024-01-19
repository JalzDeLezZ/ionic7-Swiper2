import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-redirect',
  templateUrl: './link-redirect.component.html',
  styleUrls: ['./link-redirect.component.scss'],
})
export class LinkRedirectComponent  implements OnInit {
  @Input() api_item;

  constructor() { }

  ngOnInit() {return}

}
