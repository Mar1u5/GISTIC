import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComidasPage } from '../comidas/comidas';
import { SelectorPage } from '../selector/selector';

/**
 * Generated class for the DiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dias',
  templateUrl: 'dias.html',
})
export class DiasPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiasPage');
  }

  comidas(item, dia:string){

      this.navCtrl.setRoot( ComidasPage,{item, dia});
   
  }

  goBack(item){
    this.navCtrl.setRoot(SelectorPage, {item});
  }

}
