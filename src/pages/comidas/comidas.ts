import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiasPage } from '../dias/dias';

/**
 * Generated class for the ComidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comidas',
  templateUrl: 'comidas.html',
})
export class ComidasPage {
item;
dia:string;
buttonColor: string = '#fff';
bool = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.dia = navParams.get('dia');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidasPage');
  }
  goBack(item){
    this.navCtrl.setRoot(DiasPage, {item});
  }
  changeColor(){
    if(this.bool==true){
      this.buttonColor = '#32db647d';
      this.bool=false;
    }else{
      this.buttonColor = '#fff';
      this.bool=true;
    }
  }
}
