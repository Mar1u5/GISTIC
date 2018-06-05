import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pacientesService } from '../../services/pacientes.service';
import { AddPastillaPage } from '../add-pastilla/add-pastilla';
import { SelectorPage } from '../selector/selector';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesService : pacientesService, public alertCtrl: AlertController) {
    this.item = navParams.get('item');
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PillsListPage');
  }

  deletePastilla(paciente,pastilla){
    const confirm = this.alertCtrl.create({
      title: 'Borrar Pastilla',
      message: 'Está seguro que desea eliminar esta pastilla?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Borrar',
          handler: () => {
            this.PacientesService.deletePastilla(paciente,pastilla);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
    
  }

  goToAddPage(item){
    this.navCtrl.push(AddPastillaPage, {item});
  }
  goBack(item){
    this.navCtrl.setRoot(SelectorPage, {item});
  }

}
