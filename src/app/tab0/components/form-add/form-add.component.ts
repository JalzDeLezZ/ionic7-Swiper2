import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss'],
})
export class FormAddComponent  implements OnInit {
  @Input() api_item;

  constructor() { }

  ngOnInit() {return}

}