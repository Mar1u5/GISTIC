import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectorPage } from '../selector/selector';
import { pacientesService } from '../../services/pacientes.service';
import { AnadirPacientePage } from '../anadir-paciente/anadir-paciente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pacientes = [];
  constructor(public navCtrl: NavController, public PacientesService : pacientesService) {
    this.pacientes = PacientesService.getPacientes();
  }

  nextPage(item){
  	this.navCtrl.setRoot(SelectorPage, {item});
  }

  addPaciente(){
    //this.navCtrl.setRoot(AnadirPacientePage);
    this.navCtrl.push(AnadirPacientePage);
  }

  deletePaciente(paciente){
    this.PacientesService.deletePaciente(paciente);
  }

}
