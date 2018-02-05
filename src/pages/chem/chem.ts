import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mds } from '../../assets/mds';
/**
 * Generated class for the ChemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chem',
  templateUrl: 'chem.html',
})
export class ChemPage {
  private title : string;
  private menu : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    const adres = new Mds();
    this.title = this.navParams.get('title'); 
    this.menu = adres.getAdresChem();



  }


}
