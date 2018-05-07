import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChemPage }  from '../pages/chem/chem'
import { LacPage } from '../pages/lac/lac';
import { AdresPage } from '../pages/adres/adres';
import { ProgramPage} from '../pages/program/program';
import { TestPage} from '../pages/test/test';
import { FtestPage} from '../pages/ftest/ftest'

import { DatebaseProvider } from '../providers/datebase/datebase';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { DataProvider } from '../providers/data/data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChemPage,
    LacPage,
    AdresPage,
    ProgramPage,
    TestPage,
    FtestPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChemPage,
    LacPage,
    AdresPage,
    ProgramPage,
    TestPage,
    FtestPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    SQLitePorter,
    DatebaseProvider,
    DataProvider

  ]
})
export class AppModule {}
