import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChemPage } from '../chem/chem';
import { LacPage } from '../lac/lac';
import { ProgramPage } from '../program/program';
import { TestPage} from  '../test/test'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  viewChem(){

    this.navCtrl.push( ChemPage, {title: "Chemiczny"} );
  }

  viewLac(){

    this.navCtrl.push( LacPage, {title: "Lakierniczy"} );
  }

  viewProgram(){

    this.navCtrl.push( ProgramPage, {title: "Programy"} );
  }
  viewTest(){

    this.navCtrl.push( TestPage, {title: "Programy"} );
  }

}
