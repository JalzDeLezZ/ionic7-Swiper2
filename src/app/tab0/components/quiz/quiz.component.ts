import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  DomController,
  IonAccordionGroup,
  IonRadioGroup,
} from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  unClickable = false;
  @Input() api_item;
  value_selected = null;
  @ViewChildren('iRadioGroup') iRadioGroup: QueryList<any>;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private domCtrl: DomController
  ) {}

  ngOnInit() {
    return;
  }

  handleChange(ev) {
    console.log('Current value:', JSON.stringify(ev.target.value));
    this.value_selected = ev.target.value;
  }

  onCheck() {
    // get the current item
    this.api_item.quiz.fields.forEach((item) => {
      if (item.id == this.value_selected) {
        const toArr = Array.from(this.iRadioGroup.last.el.children);
        toArr.forEach((child: any) => {
          if (child.id == item.id) {
            if (item.answer) {
              this.renderer.addClass(child, 'success');
              this.unClickable = true;
            } else {
              this.renderer.addClass(child, 'error');
              this.unClickable = true;
            }
          }
        });
      }
    });
    // disable all the radio buttons
    console.log("🚀 ~ QuizComponent ~ onCheck ~ this.iRadioGroup:", this.iRadioGroup.first.el)
    this.iRadioGroup.first.el.disabled = true;
  }
}
