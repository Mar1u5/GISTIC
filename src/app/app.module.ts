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
import { PillsListPage } from '../pages/pills-list/pills-list';
import { AddPastillaPage } from '../pages/add-pastilla/add-pastilla';
import { DiasPage } from '../pages/dias/dias';
import { ComidasPage } from '../pages/comidas/comidas';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAdoBWhc24E1FkRq1WNh88c-OfB9R9vY-I",
  authDomain: "pillnow-670f8.firebaseapp.com",
  databaseURL: "https://pillnow-670f8.firebaseio.com",
  storageBucket: "pillnow-670f8.appspot.com",
  messagingSenderId: "777992716325"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectorPage,
    AnadirPacientePage,
    PillsListPage,
    AddPastillaPage,
    DiasPage,
    ComidasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectorPage,
    AnadirPacientePage,
    PillsListPage,
    AddPastillaPage,
    DiasPage,
    ComidasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    pacientesService
  ]
})
export class AppModule {}
