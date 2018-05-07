import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectorPage } from '../selector/selector';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	items = ["paciente 1", "paciente 2", "paciente 3","paciente 4","paciente 5","paciente 6","paciente 7","paciente 8","paciente 9", "paciente 10"];

  constructor(public navCtrl: NavController) {

  }

  nextPage(item){
  	this.navCtrl.setRoot(SelectorPage, {item});
  }

}
