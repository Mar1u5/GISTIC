import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pacientesService } from '../../services/pacientes.service';
import { PillsListPage } from '../pills-list/pills-list';



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
color;
cantidad;
item;
pill;
dia;
franja;
toma = [];
pasti;
splitted = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesService : pacientesService) {
    this.item = navParams.get('item');
    this.pastillas = PacientesService.getPastillas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPastillaPage');
  }
  addPastilla(item){
    
      
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
      
      

}
}
