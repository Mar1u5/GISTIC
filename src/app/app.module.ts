import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectorPage } from '../pages/selector/selector';
import { pacientesService } from '../services/pacientes.service';
import { AnadirPacientePage } from '../pages/anadir-paciente/anadir-paciente';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectorPage,
    AnadirPacientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectorPage,
    AnadirPacientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    pacientesService
  ]
})
export class AppModule {}
