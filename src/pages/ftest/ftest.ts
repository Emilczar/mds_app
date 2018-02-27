import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {
  FormGroup,
  FormControl

} from '@angular/forms';
/**
 * Generated class for the FtestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ftest',
  templateUrl: 'ftest.html',
})
export class FtestPage {

  langs;
  langForm;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.langForm = new FormGroup({
      "langs": new FormControl()
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FtestPage');
  }

 


  doSubmit(event) {
    console.log('Submitting form1', this.langForm.value.langs);
    console.log('Submitting form2', this.langForm);
    event.preventDefault();
  }


}
