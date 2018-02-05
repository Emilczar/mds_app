import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AdresPage } from '../adres/adres';
/**
 * Generated class for the LacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lac',
  templateUrl: 'lac.html',
})
export class LacPage {
  private title: string
  private menu : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('title');
    this.menu = [500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500];
  }
  viewAdres(adres: number){
   
    this.navCtrl.push(AdresPage, {adres: adres});
  }
}
