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
    this.szczot();
    this.kip();
    this.robotDP();
    this.robotDL();
    this.robotTP();
    this.robotTL();
    this.robotT();
  }

  szczot() {
    this.sqlite.create({
        name: 'd03b.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.sqlBatch(['CREATE TABLE szczotkiC4(program TEXT,  model TEXT, doorRight TEXT, doorLeft TEXT,  backGate TEXT)', ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['M111', 'dlugi', '0', '0', 'klapa']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['M112', 'dlugi', '0', '0', 'furtka']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['M121', 'dlugi', '1', '0', 'klapa']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['M122', 'dlugi', '1', '0', 'furtka']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['M131', 'dlugi', '0', '1', 'klapa']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['M132', 'dlugi', '0', '1', 'furtka']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['M141', 'dlugi', '1', '1', 'klapa']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['M142', 'dlugi', '1', '1', 'furtka']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I111', 'krotki', '0', '0', 'klapa']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I112', 'krotki', '0', '0', 'furtka']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I121', 'krotki', '1', '0', 'klapa']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I122', 'krotki', '1', '0', 'furtka']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I131', 'krotki', '0', '1', 'klapa']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I132', 'krotki', '0', '1', 'furtka']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I141', 'krotki', '1', '1', 'klapa']],
            ['INSERT INTO szczotkiC4 VALUES (?,?,?,?,?)', ['I142', 'krotki', '1', '1', 'furtka']],
          ])
          .catch((e) => console.log('problem z baza', JSON.stringify(e)))

      })
      .catch(e => console.log('Błąd inicacji bazy', e));
  }

  kip() {
    this.sqlite.create({
        name: 'd03b.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.sqlBatch(['CREATE TABLE kip(program TEXT,  model TEXT, typ TEXT,  backGate TEXT)', ['INSERT INTO kip VALUES (?,?,?,?)', ['L110', 'krotki', 'kasten', 'klapa']],
            ['INSERT INTO kip VALUES (?,?,?,?)', ['L130', 'krotki', 'kasten', 'furtka']],
            ['INSERT INTO kip VALUES (?,?,?,?)', ['L120', 'krotki', 'kombi', 'klapa']],
            ['INSERT INTO kip VALUES (?,?,?,?)', ['L120', 'krotki', 'kombi', 'furtka']],
            ['INSERT INTO kip VALUES (?,?,?,?)', ['M110', 'dlugi', 'kasten', 'furtka']],
            ['INSERT INTO kip VALUES (?,?,?,?)', ['M110', 'dlugi', 'kasten', 'klapa']],
            ['INSERT INTO kip VALUES (?,?,?,?)', ['M120', 'dlugi', 'kombi', 'furtka']],
            ['INSERT INTO kip VALUES (?,?,?,?)', ['M120', 'dlugi', 'kombi', 'klapa']]

          ])
          .catch((e) => console.log('problem z baza', JSON.stringify(e)))

      })
      .catch(e => console.log('Błąd inicacji bazy', e));
  }

  robotDP() {

    this.sqlite.create({
      name: 'd03b.db',
      location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.sqlBatch(['CREATE TABLE robotDP(program TEXT,  doorRight TEXT, doorRightWindows TEXT)',
            ['INSERT INTO robotDP VALUES (?,?,?)', ['20', '1', '1']],
            ['INSERT INTO robotDP VALUES (?,?,?)', ['21', '0', '1']],
            ['INSERT INTO robotDP VALUES (?,?,?)', ['40', '1', '0']],
            ['INSERT INTO robotDP VALUES (?,?,?)', ['41', '0', '0']]

          ])
          .catch((e) => console.log('problem z baza robotDP', JSON.stringify(e)))
      })
      .catch(e => console.log('Błąd inicacji bazy', e))
  }


  robotDL() {

    this.sqlite.create({
        name: 'd03b.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.sqlBatch(['CREATE TABLE robotDL(program TEXT,  doorLeft TEXT, doorLeftWindows TEXT)',
            ['INSERT INTO robotDL VALUES (?,?,?)', ['20', '1', '1']],
            ['INSERT INTO robotDL VALUES (?,?,?)', ['70', '0', '1']],
            ['INSERT INTO robotDL VALUES (?,?,?)', ['40', '1', '0']],
            ['INSERT INTO robotDL VALUES (?,?,?)', ['90', '0', '0']]

          ])
          .catch((e) => console.log('problem z baza robotDL', JSON.stringify(e)))
      })
      .catch(e => console.log('Błąd inicacji bazy', e))
  }

  robotTP() {

    this.sqlite.create({
        name: 'd03b.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.sqlBatch(['CREATE TABLE robotTP(program TEXT,  backRightWindows TEXT)',
            ['INSERT INTO robotTP VALUES (?,?)', ['20', '1']],
            ['INSERT INTO robotTP VALUES (?,?)', ['40', '0']]
          ])
          .catch((e) => console.log('problem z baza robotTP', JSON.stringify(e)))
      })
      .catch(e => console.log('Błąd inicacji bazy', e))
  }

  robotTL() {

    this.sqlite.create({
        name: 'd03b.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.sqlBatch(['CREATE TABLE robotTL(program TEXT, backLeftWindow TEXT)',
            ['INSERT INTO robotTL VALUES (?,?)', ['20', '1']],
            ['INSERT INTO robotTL VALUES (?,?)', ['40', '0']]
          ])
          .catch((e) => console.log('problem z baza robotTL', JSON.stringify(e)))
      })
      .catch(e => console.log('Błąd inicacji bazy', e))
  }

  robotT() {

    this.sqlite.create({
        name: 'd03b.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.sqlBatch(['CREATE TABLE robotT(program TEXT,  backGate TEXT,  backGateWindows TEXT)',
            ['INSERT INTO robotT VALUES (?,?,?)', ['10', 'klapa','1']],
            ['INSERT INTO robotT VALUES (?,?,?)', ['30', 'klapa','0']],
            ['INSERT INTO robotT VALUES (?,?,?)', ['60', 'furtka','1']],
            ['INSERT INTO robotT VALUES (?,?,?)', ['60', 'furtka','0']]

          ])
          .catch((e) => console.log('problem z baza robotT', JSON.stringify(e)))
      })
      .catch(e => console.log('Błąd inicacji bazy', e))
  }
}
