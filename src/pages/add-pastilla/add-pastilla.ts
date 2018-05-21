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
pastilla;
color;
cantidad;
item;
pill;
dia;
franja;
splitted = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesService : pacientesService) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPastillaPage');
  }
  addPastilla(item){
     console.log(this.dia);
      for(let i of this.dia){
        for(let j of this.franja){
          console.log(i);
          this.pill = {nombre: this.pastilla, color: this.color, cantidad: this.cantidad, dia: i, franja: j, tomado:false}; 
          this.PacientesService.addPastillas(item, this.pill);
        }
      }
      this.navCtrl.setRoot(PillsListPage, {item});   
      
      

}
}
