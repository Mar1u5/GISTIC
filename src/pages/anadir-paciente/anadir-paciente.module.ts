import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnadirPacientePage } from './anadir-paciente';

@NgModule({
  declarations: [
    AnadirPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(AnadirPacientePage),
  ],
})
export class AnadirPacientePageModule {}
