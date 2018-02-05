import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Mds } from '../../assets/mds' // class for adres MDS 

/**
 * Generated class for the AdresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adres',
  templateUrl: 'adres.html',
})
export class AdresPage {
  private mds;
  private adres;
  private hex;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.adres = this.navParams.get('adres'); //nazwa header
    console.log("AdresPage " + this.adres);
    const adresy = new Mds();
    this.mds = adresy.getMenu(); // lista adresów mds
    // let hexTab;
    this.hex = adresy.decToHex(this.adres,this.mds)
    console.log('hex:'+this.hex);
  }

}
