
import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';



import {
  DatebaseProvider
} from '../../providers/datebase/datebase';




/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',

})
export class ProgramPage {

public title : string;
public model : string;
public typ : string;
public doorRight : number
public doorRightWindows : number;
public doorLeft: number;
public doorLeftWindows : number;
public backRightWindows : number
public backLeftWindows : number;
public backGate : string;
public backGateWindows :number;

public test;
public wynik;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: DatebaseProvider ) {

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('title');



  }

  ngOnInit() {
   // this.sql.getSum().subscribe(data =>{
   // this.wynik = data;
  //  });

  }

  onClick(){



    console.log( "onClick : ", this.sql.get_szczotki(this.model,this.doorRight, this.doorLeft, this.backGate) );
   // this.sql.get_szczotki(this.model,this.doorRight, this.doorLeft, this.backGate) ;
   this.sql.getSum().subscribe(data =>{
    this.wynik = data; });



  }

  onClick2(){


    console.log("this.test: ", this.test);






  }
  }







