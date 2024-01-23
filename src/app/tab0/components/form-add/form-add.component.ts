import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss'],
})
export class FormAddComponent  implements OnInit {
  @Input() api_item;
  @Output() childEventEmit = new EventEmitter<any>();

  @ViewChild('myForm') myForm: NgForm;

  constructor() { }

  ngOnInit() {return}


  onSubmit(form: NgForm) {
    const { value } = form;
    this.childEventEmit.emit(value);
  }
}
