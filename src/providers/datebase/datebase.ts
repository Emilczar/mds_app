import {
  Injectable
} from '@angular/core';

import {
  SQLite,
  SQLiteObject
} from '@ionic-native/sqlite';
import { DataProvider } from '../data/data';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the DatebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatebaseProvider {
wynik;
private sum = new Subject<string>();
  constructor(private sqlite: SQLite, private baza : DataProvider) {}





// Wyszukiwanie programu na szczotki
  get_szczotki(model, doorRight,  doorLeft,  backGate) {

    this.sqlite.create({
        name: 'dataDB.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.executeSql("SELECT program FROM szczotkiC4 where model = ? AND doorRight = ? AND doorLeft = ? AND backGate= ?", [model,doorRight,doorLeft,backGate])
      .then((data) => {
            this.wynik = data.rows.item(0).program;
            this.sum.next(this.wynik)
            console.log(" wynik: get_szczotki() " + this.wynik);
          })
      })
      .catch((e) => {
        console.log(" error get_szczotki: " + e);
      })
    // return console.log(" return " + this.wynik);

  }


getSum(): Observable<string>{
  return this.sum.asObservable();
}






}
