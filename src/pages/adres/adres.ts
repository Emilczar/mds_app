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

  public mds;
   adres ;
   hex ;
   lac1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {


    this.adres = this.navParams.get('adres'); //nazwa header

    const adresy = new Mds();
    this.lac1 = adresy.getLac();

    console.log("lac 1 " + this.lac1);
    this.mds = adresy.getMenu(); // lista adresów mds

    this.hex = adresy.decToHex(this.adres,this.mds)


    }

}
