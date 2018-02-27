import {
  Injectable
} from '@angular/core';

import {
  SQLite,
  SQLiteObject
} from '@ionic-native/sqlite';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/*
myjka
kipstacja
robot
esta
public model : String;
public typ : String;
public doorRight : boolean
public doorRightWindows : boolean;
public doorLeft: boolean;
public doorLeftWindows : boolean;
public backRightWindows : boolean
public backLeftWindows : boolean;
public backGate : String;
public backGateWindows :boolean; */

@Injectable()
export class DataProvider {
  wynik;
  constructor(private sqlite: SQLite) {
    this.sqlite.create({
        name: 'dataDB.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.sqlBatch(['CREATE TABLE szczotkiC4(program TEXT,  model TEXT, doorRight TEXT, doorLeft TEXT,  backGate TEXT)',
         ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I111', 'krotki', '0', '0',  'klapa']],
         ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I112', 'krotki', '0', '0',  'furtka']],
         ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I121', 'krotki', '1', '0',  'klapa']],
         ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I122', 'krotki', '1', '0',  'furtka']],
         ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I131', 'krotki', '0', '1',  'klapa']],
         ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I132', 'krotki', '0', '1',  'furtka']],
         ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I141', 'krotki', '1', '1',  'klapa']],
         ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I142', 'krotki', '1', '1',  'furtka']]
          ])
          .catch((e) => console.log('problem z baza', JSON.stringify(e)))

      })
      .catch(e => console.log('Błąd inicacji bazy', e));
  }
}
