import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pacientesService } from '../../services/pacientes.service';
import { AddPastillaPage } from '../add-pastilla/add-pastilla';
import { SelectorPage } from '../selector/selector';

/**
 * Generated class for the PillsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pills-list',
  templateUrl: 'pills-list.html',
})
export class PillsListPage {
  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesService : pacientesService) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PillsListPage');
  }

  deletePastilla(paciente,pastilla){
    this.PacientesService.deletePastilla(paciente,pastilla);
  }

  goToAddPage(item){
    this.navCtrl.push(AddPastillaPage, {item});
  }
  goBack(item){
    this.navCtrl.setRoot(SelectorPage, {item});
  }

}
