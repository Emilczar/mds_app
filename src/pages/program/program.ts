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

  public title: string;
  public typMain: number
  public model: string;
  public typ: string;
  public doorRight: number
  public doorRightWindows: number;
  public doorLeft: number;
  public doorLeftWindows: number;
  public backRightWindows: number
  public backLeftWindows: number;
  public backGate: string;
  public backGateWindows: number;
  public floorCar : number = 20;
  public leiterklapa : number;

  public test;
  public wynik;
  public kipstacja;
  public maska
  public robotDP;
  public robotDL;
  public robotTP;
  public robotTL;
  public robotT ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: DatebaseProvider) {

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('title');



  }
  getTypMain(model, leiterklapa) {

    let wynik;
    if(model==='krotki'){
      if(leiterklapa==1){
        wynik = 15;
      }
      else{
        wynik = 11;
      }
    }else{
      wynik = 31;
    }
return wynik;
  }
  ngOnInit() {

  }



  onClick() {
    this.sql.get_szczotki(this.model, this.doorRight, this.doorLeft, this.backGate);
    this.sql.getSum().subscribe(data => {
      this.wynik = data;
    });
    this.sql.get_kipstacja(this.model, this.typ, this.backGate);
    this.sql.getKipstacja().subscribe(data => {
      this.kipstacja = data;
    });

    this.sql.get_robotDP(this.doorRight,this.doorRightWindows);
    this.sql.getRobotDP().subscribe(data=>{
      this.robotDP = data;
    })

    this.sql.get_robotDL(this.doorLeft,this.doorLeftWindows);
    this.sql.getRobotDL().subscribe(data=>{
      this.robotDL = data;
    })

    this.sql.get_robotTP(this.backRightWindows);

    this.sql.getRobotTP().subscribe(data=>{
      this.robotTP = data;
    })

    this.sql.get_robotTL(this.backLeftWindows);
    this.sql.getRobotTL().subscribe(data=>{
      this.robotTL = data;
    })

    this.sql.get_robotT(this.backGate,this.backGateWindows);
    this.sql.getRobotT().subscribe(data=>{
      this.robotT = data;
    })

     this.typMain = this.getTypMain(this.model, this.leiterklapa);
  console.log(" leiterklapa: ", this.typMain);
  }

  onClick2() {



  }

}
