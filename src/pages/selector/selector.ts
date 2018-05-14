import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PillsListPage } from '../pills-list/pills-list';

/**
 * Generated class for the SelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selector',
  templateUrl: 'selector.html',
})
export class SelectorPage {
	item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.item = navParams.get('item'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectorPage');
  }

  goBack(){
    this.navCtrl.setRoot(HomePage);
  }
  nextPage(item){
    this.navCtrl.setRoot(PillsListPage, {item});
  }

}
