import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from '../card/card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private openCardPage() {
    this.navCtrl.setRoot(CardPage);
  }

  private openSettingsPage() {
    this.navCtrl.parent.select(2);
  }

}
