import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PillsListPage } from './pills-list';

@NgModule({
  declarations: [
    PillsListPage,
  ],
  imports: [
    IonicPageModule.forChild(PillsListPage),
  ],
})
export class PillsListPageModule {}
