import { Component } from '@angular/core';
import { Tab5Page } from './tab5/tab5.page';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  component = Tab5Page;
  constructor(
    private menuCtrl: MenuController
  ) {

  }

  menuClose() {
    this.menuCtrl.close();
  }
}
