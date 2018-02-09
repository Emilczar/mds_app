
import { Injectable } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  wynik;
  constructor(private sqlite: SQLite) {
    this.sqlite.create({
      name: 'dataDB.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.sqlBatch(['CREATE TABLE szczotki(program TEXT, drzwi_l TEXT, drzwi_p TEXT, tyl TEXT, typ TEXT, model TEXT)',
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['F112', 'brak', 'brak', 'klapa', 'kasten', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['F113', 'brak','brak', 'furtka', 'kasten', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['F122', 'brak', 'tak', 'klapa', 'kasten', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['F123', 'brak', 'tak', 'furtka', 'kasten', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['F132', 'tak', 'brak', 'klapa', 'kasten', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['F133', 'tak', 'brak', 'furtka', 'kasten', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['F142', 'tak', 'tak', 'klapa', 'kasten', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['F143', 'tak', 'tak', 'furtka', 'kasten', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['H111', 'brak', 'brak', 'brak', 'krotka', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['H112', 'brak', 'brak', 'brak', 'dlugi', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['H114', 'brak', 'brak', 'brak', 'doka', 'T6']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['I111', 'brak', 'brak', 'klapa', 'krotki', 'C4']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['I112', 'brak', 'brak', 'furtka', 'krotki', 'C4']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['I121', 'brak', 'tak', 'klapa', 'krotki', 'C4']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['I122', 'brak', 'tak', 'furtka', 'krotki', 'C4']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['I131', 'tak', 'brak', 'klapa', 'krotki', 'C4']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['I132', 'tak', 'brak', 'furtka', 'krotki', 'C4']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['I112', 'tak', 'tak', 'klapa', 'krotki', 'C4']],
        ['INSERT INTO szczotki VALUES (?,?,?,?,?,?)', ['I112', 'tak', 'tak', 'furtka', 'krotki', 'C4']]
      ])
      
      .catch((e)=> console.log('problem z baza', JSON.stringify(e)))
    
      })
      .catch(e => console.log('Błąd inicacji bazy', e));
}
  }


