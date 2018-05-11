import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPastillaPage } from './add-pastilla';

@NgModule({
  declarations: [
    AddPastillaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPastillaPage),
  ],
})
export class AddPastillaPageModule {}
