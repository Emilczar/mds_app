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
import {
  Subject
} from 'rxjs/Subject';

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

  private title;
  drzwi_l;
  drzwi_p;
  drzwi_p_okno;
  tyl;
  typ;
  model;


  DPO;
  DPB;
  DPBB;

  DLO;
  DLB;
  DLBB;

  KO;
  KB;
  FO;
  FB;
  typek;
  private szczotki;

  lista = [{
      name: "T6",
      typ: [{
          name: "kasten"
        },
        {
          name: "otwarta"
        }
      ]
    },
    {
      name: "C4",
      typ: [{
          name: "krotki"
        },
        {
          name: "dlugi"
        }
      ]
    }
  ];




  drzwi_l1 = "tak";
  drzwi_p1 = "brak";
  tyl1 = "klapa";
  typ1 = "krotki";
  model1 = "C4";


  wynik = new Subject < string > ();


  constructor(public navCtrl: NavController, public navParams: NavParams, private sql: DatebaseProvider) {}

  ionViewDidLoad() {
    this.title = this.navParams.get('title');

  }
  baza() {
    console.log(" this.typek  pierwsze szukanie1 : " + this.typek);
    this.typek = this.sql.get_select("tak", "brak", "klapa", "krotki", "C4");
    console.log(" this.typek  baza1 : " + this.typek);
    this.wynik.next(this.typek);
  }


  get_program_szczotki() {

    let drzwi_l = this.drzwi_l1;
    let drzwi_p = this.drzwi_p1;
    let tyl = this.tyl1;
    let typ = this.typ1;
    let model = this.model1;
    this.szczotki = this.sql.get_szczotki(drzwi_l, drzwi_p, tyl, typ, model);
  }



  set_drzwi_l() {

  }

}
