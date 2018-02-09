import {
  Injectable
} from '@angular/core';

import {
  SQLite,
  SQLiteObject
} from '@ionic-native/sqlite';
import { DataProvider } from '../data/data';


/*
  Generated class for the DatebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatebaseProvider {
 
 private wynik: string
/*  private drzwi_l: string;
 private drzwi_p: string;
 private tyl: string;
 private typ: string;
 private model: string; */
 private wynik_szczotki : string;

  constructor(private sqlite: SQLite, private baza : DataProvider) {}



  get_select(drzwi_l: string, drzwi_p: string, tyl: string, typ: string, model: string) {
    this.sqlite.create({
        name: 'dataDB.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.executeSql("SELECT program FROM szczotki where drzwi_l = ? AND drzwi_p = ? AND tyl = ? AND typ= ?  AND  model =? ", [drzwi_l, drzwi_p, tyl, typ, model])
          .then((data) => {
            this.wynik = data.rows.item(0).program;
            console.log(" this.wynik:  " + this.wynik);
          })

      })
      .catch((e) => {
        console.log(" error  get_select: " + e);
      })
    return this.wynik;

  }

  get_szczotki(drzwi_l: string, drzwi_p: string, tyl: string, typ: string, model: string) {
    this.sqlite.create({
        name: 'dataDB.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.executeSql("SELECT program FROM szczotki where drzwi_l = ? AND drzwi_p = ? AND tyl = ? AND typ= ?  AND  model =? ", [drzwi_l, drzwi_p, tyl, typ, model])
          .then((data) => {
            this.wynik_szczotki = data.rows.item(0).program;
            console.log(" this.wynik_szczotki:  " + this.wynik_szczotki);
          })

      })
      .catch((e) => {
        console.log(" error  get_select: " + e);
      })
    return this.wynik_szczotki;

  }



}
