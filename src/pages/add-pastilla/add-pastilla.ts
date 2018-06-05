import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pacientesService } from '../../services/pacientes.service';
import { PillsListPage } from '../pills-list/pills-list';
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the AddPastillaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pastilla',
  templateUrl: 'add-pastilla.html',
})
export class AddPastillaPage {
pastillas;
color= null;
cantidad = null;
item;
pill;
dia = null;
franja = null;
toma = [];
pasti = null;
splitted = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesService : pacientesService, public alertCtrl: AlertController) {
    this.item = navParams.get('item');
    this.pastillas = PacientesService.getPastillas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPastillaPage');
  }
  addPastilla(item){

   if(this.pasti != null && this.color != null && this.cantidad != null && this.dia !=null && this.franja != null ){
    let exist = this.PacientesService.existPill(this.pasti, this.item);
    console.log(exist);
    console.log(this.pasti);
    if(!exist){  
      let d = []
      for(let i of this.dia){
        let t = [];
        for(let j of this.franja){
          t.push({nombre_f: j, tomado: false});
        }
        d.push({nombre_d: i, franja: t});
      }
      this.PacientesService.addPastillas(item, {nombre_p: this.pasti, color: this.color, cantidad: this.cantidad, dia: d});
      this.navCtrl.setRoot(PillsListPage, {item});
    }else{
      const alert = this.alertCtrl.create({
        title: 'Medicamento ya existente',
        subTitle: 'El medicamento '+this.pasti+' ya existe',
        buttons: ['OK']
      });
      alert.present();
    }   
  }else{
    const alert = this.alertCtrl.create({
      title: 'Faltan campos por rellenar',
      subTitle: 'Por favor rellene todos los campos',
      buttons: ['OK']
    });
    alert.present();
  } 

}
}
