
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
kipstacja;
v_robotDP;
v_robotDL;
v_robotTP;
v_robotTL;
v_robotT ;

private kipstacja$ = new Subject<string>();
private sum = new Subject<string>();
private v_robotDP$  = new Subject<string>();
private v_robotDL$  = new Subject<string>();
private v_robotTP$  = new Subject<string>();
private v_robotTL$  = new Subject<string>();
private v_robotT$  = new Subject<string>();

  constructor(private sqlite: SQLite, public data : DataProvider)  {}





  get_kipstacja(model, typ,  backGate) {

    this.sqlite.create({
        name: 'd03b.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.executeSql("SELECT program FROM kip where model = ? AND typ = ?  AND backGate= ?", [model, typ,  backGate])
      .then((data) => {
        this.kipstacja = data.rows.item(0).program;
            this.kipstacja$.next(this.kipstacja);
            console.log(" wynik: get_kipstacja() " + this.kipstacja);
          }).catch((e) => {
            console.log(" bład wyniku get_kipstacja " + e);
          })
      })
      .catch((e) => {
        console.log(" error get_kipstacja: " + e);
      })

  }



  get_szczotki(model, doorRight,  doorLeft,  backGate) {

    this.sqlite.create({
        name: 'd03b.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.executeSql("SELECT program FROM szczotkiC4 where model = ? AND doorRight = ? AND doorLeft = ? AND backGate= ?", [model,doorRight,doorLeft,backGate])
      .then((data) => {
            this.wynik = data.rows.item(0).program;
            this.sum.next(this.wynik)
            console.log(" wynik: get_szczotki() " + this.wynik);
          }) .catch((e) => {
            console.log(" bład wyniku get_szczotki()  " + e);
          })
      })
      .catch((e) => {
        console.log(" error get_szczotki: " + e);
      })

  }

  get_robotDP(doorRight,doorRightWindows){
    this.sqlite.create({
      name: 'd03b.db',
      location: 'default'
    })
    .then((db: SQLiteObject)=>{
      db.executeSql("SELECT program FROM robotDP where doorRight = ? AND  doorRightWindows = ? ", [doorRight,doorRightWindows])
      .then((data) =>{
        this.v_robotDP = data.rows.item(0).program;
        this.v_robotDP$.next(this.v_robotDP)
        console.log(" wynik:  get_robotDP() " + this.v_robotDP);
      })
      .catch((e) => {
        console.log(" bład wyniku get_robotDP()  " + e.name);
      })

    })
    .catch((e) => {
      console.log(" error get_robotDP(): " + e);
    })
  }


  get_robotDL(doorLeft,doorLeftWindows){
    this.sqlite.create({
      name: 'd03b.db',
      location: 'default'
    })
    .then((db: SQLiteObject)=>{
      db.executeSql("SELECT program FROM robotDL where doorLeft = ? AND  doorLeftWindows = ? ", [doorLeft,doorLeftWindows])
      .then((data) =>{
        this.v_robotDL = data.rows.item(0).program;
        this.v_robotDL$.next(this.v_robotDL)
        console.log(" wynik:  get_robotDL() " + this.v_robotDL);
      })
      .catch((e) => {
        console.log(" bład wyniku get_robotDL()  " + e.name);
      })

    })
    .catch((e) => {
      console.log(" error get_robotDL(): " + e);
    })
  }

  get_robotTP(backRightWindows){
    this.sqlite.create({
      name: 'd03b.db',
      location: 'default'
    })
    .then((db: SQLiteObject)=>{
      db.executeSql("SELECT program FROM robotTP where backRightWindows = ? ", [backRightWindows])
      .then((data)=>{
        this.v_robotTP  = data.rows.item(0).program;
        this.v_robotTP$.next(this.v_robotTP)
        console.log(" wynik:  get_robotTP() " + this.v_robotTP);
      })
      .catch((e) => {
        console.log(" bład wyniku get_robotTP()  " + e);
      })

    })  .catch((e) => {
      console.log(" error get_robotTP(): " + e);
    })

  }

  get_robotTL(backLeftWindows){
    this.sqlite.create({
      name: 'd03b.db',
      location: 'default'
    })
    .then((db: SQLiteObject)=>{
      db.executeSql("SELECT program FROM robotTL where backLeftWindow = ? ", [backLeftWindows])
      .then((data)=>{
        this.v_robotTL  = data.rows.item(0).program;
          this.v_robotTL$.next(this.v_robotTL);
        console.log(" wynik:  get_robotTL() " + this.v_robotTL);
      })
      .catch((e) => {
        console.log(" bład wyniku get_robotTL()  " + JSON.stringify(e));
      })

    })  .catch((e) => {
      console.log(" error get_robotTL(): " + e);
    })

  }

  get_robotT(backGate,backGateWindows){
    this.sqlite.create({
      name: 'd03b.db',
      location: 'default'
    })
    .then((db: SQLiteObject)=>{
      db.executeSql("SELECT program FROM robotT where backGate = ? AND  backGateWindows = ? ", [backGate,backGateWindows])
      .then((data) =>{
        this.v_robotT = data.rows.item(0).program;
        this.v_robotT$.next(this.v_robotT)
        console.log(" wynik:  get_robotT() " + this.v_robotT );
      })
      .catch((e) => {
        console.log(" bład wyniku get_robotT()  " + e.name);
      })

    })
    .catch((e) => {
      console.log(" error get_robotT(): " + e);
    })
  }


getSum(): Observable<string>{
   return this.sum.asObservable();
}
getKipstacja(): Observable<string>{
  return this.kipstacja$.asObservable();
}


getRobotDP() : Observable<string>{
  return this.v_robotDP$.asObservable();
}
getRobotDL(): Observable<string>{
  return this.v_robotDL$.asObservable();
}
getRobotTP(): Observable<string>{
  return this.v_robotTP$.asObservable();
}
getRobotTL():Observable<string>{
  return this.v_robotTL$.asObservable();
}
getRobotT(): Observable<string>{
  return this.v_robotT$.asObservable();
}

}
