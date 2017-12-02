import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  go() {
    this.navCtrl.setRoot(ItemsPage, { id: 2 });
  }
  reallyGo() {
    window.history.pushState(null, 'foo', '/items/4');
    window.history.pushState(null, 'foo', '/items/4');
    window.history.back();
    // window.location.assign('/items/4');
  }
}
