import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectorPage } from '../selector/selector';
import { pacientesService } from '../../services/pacientes.service';
import { AnadirPacientePage } from '../anadir-paciente/anadir-paciente';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pacientes: any;

  constructor(public navCtrl: NavController, public PacientesService : pacientesService, public alertCtrl: AlertController) {
    /*this.PacientesService.getPacientes().subscribe(pacientes =>{
      this.pacientes = pacientes;
    })*/

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
    const confirm = this.alertCtrl.create({
      title: 'Borrar Paciente',
      message: 'Está seguro que desea eliminar este paciente?',
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
            this.PacientesService.deletePaciente(paciente);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  
    //this.PacientesService.deletePaciente(paciente);
  }
  reset(){
    this.PacientesService.resetTomado();
    
      const alert = this.alertCtrl.create({
        title: 'Semana reseteada!',
        subTitle: 'Todas las pastillas pasan al estado no tomadas',
        buttons: ['OK']
      });
      alert.present();
    
  }

}
