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
  private drzwi_l;
  private drzwi_p;
  private drzwi_p_okno;
  private drzwi_l_okno;

  private tyl;
  typ;
  model;

  /// Zmienen do karoseri
  private DPO;
  private DPB;
  private DPBB;

  private DLO;
  private DLB;
  private DLBB;

  private KO;
  private KB;
  private FO;
  private FB;

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

  //funkcja testowa do połączenia do bazy
  baza() {
    console.log(" this.typek  pierwsze szukanie1 : " + this.typek);
    this.typek = this.sql.get_select("tak", "brak", "klapa", "krotki", "C4");
    console.log(" this.typek  baza1 : " + this.typek);
    this.wynik.next(this.typek);
  }

  // program na szczotki
  get_program_szczotki() {

    let drzwi_l = this.drzwi_l1;
    let drzwi_p = this.drzwi_p1;
    let tyl = this.tyl1;
    let typ = this.typ1;
    let model = this.model1;
    this.szczotki = this.sql.get_szczotki(drzwi_l, drzwi_p, tyl, typ, model);
  }


  // testowa funkcji.
  set_test() {
    return console.log("set test: drzwi_l: " + this.drzwi_l + " drzwi_p: " + this.drzwi_p + " drzwi_p_okno: " + this.drzwi_p_okno + " drzwi_l_okno " + this.drzwi_l_okno);


  }


  // ustawienie Drzwi prawe okno
  set_DPO() {
    switch (this.DPO == true) {
      case true:
        this.drzwi_p = "tak";
        this.drzwi_p_okno = "tak"
        break;

      case false:
        this.drzwi_p = null;
        this.drzwi_p_okno = null;
        break;
    }
    return console.log("set DPO: " + this.DPO + " drzwi_p: " + this.drzwi_p + " drzwi_p_okno: " + this.drzwi_p_okno)
  }

  // ustawienie drzwi prawe bez okna
  set_DPB() {
    switch (this.DPB == true) {
      case true:
        this.drzwi_p = "tak";
        this.drzwi_p_okno = "brak"
        break;

      case false:
        this.drzwi_p = null;
        this.drzwi_p_okno = null;
        break;
    }
    return console.log("set DPB: " + this.DPB + " drzwi_p: " + this.drzwi_p + "  this.drzwi_p_okno: " + this.drzwi_p_okno)
  }

  //ustawienia brak prawych drzwi
  set_DPBB() {
    switch (this.DPBB == true) {
      case true:
        this.drzwi_p = "brak";
        this.drzwi_p_okno = "null"
        break;

      case false:
        this.drzwi_p = null;
        this.drzwi_p_okno = null;
        break;
    }
    return console.log("set DPBP: " + this.DPBB + " drzwi_p: " + this.drzwi_p + " Brak drzwi_p_okno: " + this.drzwi_p_okno)
  }


  // ustawienie Drzwi lewych okno
  set_DLO() {
    switch (this.DLO == true) {
      case true:
        this.drzwi_l = "tak";
        this.drzwi_l_okno = "tak"
        break;

      case false:
        this.drzwi_l = null;
        this.drzwi_l_okno = null;
        break;
    }
    return console.log("set DLO: " + this.DLO + " drzwi_l: " + this.drzwi_l + " drzwi_l_okno: " + this.drzwi_l_okno)
  }

  // ustawienie drzwi lewych bez okna
  set_DLB() {
    switch (this.DLB == true) {
      case true:
        this.drzwi_l = "tak";
        this.drzwi_l_okno = "brak"
        break;

      case false:
        this.drzwi_l = null;
        this.drzwi_l_okno = null;
        break;
    }
    return console.log("set DLB: " + this.DLB + " drzwi_l: " + this.drzwi_l + "  drzwi_l_okno: " + this.drzwi_l_okno)
  }

  // ustawienia brak lewych drzwi
  set_DLBB() {
    switch (this.DLBB == true) {
      case true:
        this.drzwi_l = "brak";
        this.drzwi_l_okno = "null"
        break;
      case false:
        this.drzwi_l = null;
        this.drzwi_l_okno = null;
        break;
    }
    return console.log("set DLBB:" + this.DLBB + " drzwi_l: " + this.drzwi_l + " Brak okna: " + this.drzwi_l_okno)
  }
  set_KO() {
    switch (this.KO == true) {
      case true:
        this.tyl = "klapa";       
        break;
      case false:
      this.tyl = null;   
        break;
    }
    return console.log("set KO: " + this.KO + " tyl: " + this.tyl);
  }
  set_KB() {
    switch (this.KB == true) {
      case true:
        this.tyl = "klapa";       
        break;
      case false:
      this.tyl = null;   
        break;
    }
    return console.log("set KB: " + this.KB + " tyl: " + this.tyl);
  }
  set_FO() {
    switch (this.FO == true) {
      case true:
        this.tyl = "furtka";       
        break;
      case false:
        this.tyl = null;   
        break;
    }
    return console.log("set FO: " + this.FO + " tyl: " + this.tyl);
  }
  set_FB() {
    switch (this.FB == true) {
      case true:
        this.tyl = "furtka";       
        break;
      case false:
        this.tyl = null;   
        break;
    }
    return console.log("set FB: " + this.FB + " tyl: " + this.tyl);
  }

}
