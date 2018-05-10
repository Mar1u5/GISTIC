import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pacientesService } from '../../services/pacientes.service';
import { HomePage } from '../home/home';

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
paciente;
  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesService : pacientesService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnadirPacientePage');
  }

  addNote(){
    this.PacientesService.addPaciente(this.paciente);
    this.navCtrl.setRoot(HomePage);
  }
  
}
