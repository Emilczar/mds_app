import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { SQLitePorter } from '@ionic-native/sqlite-porter';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

plik;
plik2;
plik3;
baza : SQLiteObject;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sqlite: SQLite) {


        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');



    
  }

  create(){
  

           
    this.sqlite.create({
      name: 'data2.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE db1(name)', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log('błąd create', e));
          db.executeSql('CREATE TABLE db2(name)', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log('błąd create', e));

          db.executeSql('CREATE TABLE db3(name)', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log('błąd create', e));
    
      })
      .catch(e => console.log('Błąd inicacji bazy', e));

     

     
     
  }  
  add(){
    this.sqlite.create({
      name: 'data2.db',
      location: 'default'
    })
    .then((db:SQLiteObject)=> {
      db.executeSql('INSERT INTO db1 VALUES (?)', ['Alice'])
        .then((data)=>console.log("Dodało do bazy1" , data))
        .catch((e)=> console.log("Problem dodaniem do bazy :" , e))

        db.executeSql('INSERT INTO db2 VALUES (?)', ['bbb'])
        .then((data)=>console.log("Dodało do bazy2" , data))
        .catch((e)=> console.log("Problem dodaniem do bazy :" , e))

        db.sqlBatch([['INSERT INTO db3 VALUES (?)',['pies']],
        ['INSERT INTO db3 VALUES (?)',['kot']]])
        .then((data)=>console.log("Dodało do bazy 3" , data))
        .catch((e)=> console.log("Problem dodaniem do bazy :" , e))

    })

    
    .catch(e => console.log('bład Add()', e));


  };


select(){

  let a;
    console.log('program test');

    this.sqlite.create({
      name: 'data2.db',
      location: 'default'
    })
    .then((db:SQLiteObject)=> {

      db.executeSql('SELECT name FROM db1',{})
      .then((data)=> {
        this.plik = data.rows;
        console.log("wynik pliku  " + this.plik.item(0).name);
       })
       db.executeSql('SELECT name FROM db2',{})
       .then((data)=> {
         this.plik2 = data.rows;
         console.log("wynik pliku2  " + this.plik2.item(0).name);
        })

        db.executeSql('SELECT name FROM db3',{})
        .then((data)=> {

            console.log(" JSON.stringify(data)  " +JSON.stringify(data));
            console.log(" data.rows.length  " + data.rows.length);
          for (let index = 0; index < data.rows.length; index++) {
            console.log("for wynik  " + data.rows.item(index).name);
      
            
          }
          console.log("wynik pliku3  " + this.plik3.item(0).name);
         })
    .catch((e)=>console.log("problem z select :", e))
      
    }
  ) 
  .catch((e)=>console.log("problem Funkcja Select :", e))
  console.log("Wynik SELECT ", a);
  };
}
