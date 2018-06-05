import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pacientesService } from '../../services/pacientes.service';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AnadirPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadir-paciente',
  templateUrl: 'anadir-paciente.html',
})
export class AnadirPacientePage {
paciente = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesService : pacientesService, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnadirPacientePage');
  }

  addPaciente(){
    if(this.paciente != null){
    this.PacientesService.addPaciente({id: Date.now() ,nombre: this.paciente, pastillas:[]});
    this.navCtrl.setRoot(HomePage);}
    else{
      const alert = this.alertCtrl.create({
        title: 'Campo paciente vacío',
        subTitle: 'Por favor rellene el campo paciente',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  
}
