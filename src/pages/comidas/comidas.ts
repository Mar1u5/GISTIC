import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiasPage } from '../dias/dias';
import { pacientesService } from '../../services/pacientes.service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesService : pacientesService) {
    this.item = navParams.get('item');
    this.dia = navParams.get('dia');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidasPage');
  }
  goBack(item){
    this.navCtrl.setRoot(DiasPage, {item});
  }
  changeColor(pastilla){
    this.PacientesService.tomado(this.item, pastilla);
  }
}
