import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
} from 'ionic-angular';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  itemId: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public vc: ViewController,
  ) {
    this.itemId = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

  push(id: number) {
    this.navCtrl.push(ItemsPage, { id: id });
  }

  setRoot(id: number) {
    this.navCtrl.setRoot(ItemsPage, { id: id });
  }
  pushString(id: number) {
    this.navCtrl.push('ItemsPage', { id: id });
  }

  setRootString(id: number) {
    this.navCtrl.setRoot('ItemsPage', { id: id });
  }
}
