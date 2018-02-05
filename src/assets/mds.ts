export class Mds{
    private adres : any;
    private chemAdres : any;
    constructor(){
    
    }
    
    
    decToHex(adres: string, tab: any) {
    
    let i = 0;
    let hex =[];
    let newtab = []
    //let tabHex;
    //let object = {};
      for (const key in tab) {
        let tabHex;
        if (tab.hasOwnProperty(key)) {
          
          tabHex= tab[key]  //przypisanie elementu tablicy do zmiennej
          tabHex.adres+=adres; // ustawienie adresów docelowego
          hex[i] = tabHex.adres.toString(16); //zmiana aresów dec na hex i zapisanie do tablicy
          tabHex.adres = hex[i];
          i++
          newtab.push(tabHex) //tworzenie nowej tablicy dla adresów hex
        }
      }
     return newtab;
    }
    
    getAdresChem(){
      return this.chemAdres =[
           {
          adres : 0,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 0,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 0,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 0,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 0,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 0,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 0,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 0,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        
      ];
    
    }
    
    
    
    getMenu(){
    return this.adres = [
        {
          adres : 0,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 2,
          shortName : "2017",
          bajt : 4,
          name : "Kennnummer-Produktionsjahr"
        },
        {
          adres : 1,
          shortName : "KNR",
          bajt : 8,
          name : "Kennnummer-Stammdaten" 
        },
        {
          adres : 1,
          shortName : "MODEL /TEIL",
          bajt : 4,
          name : "Typ, Modell"
        },
        {
          adres : 1,
          shortName : "Układ 01 / Push 02",
          bajt : 2,
          name : "ECOPUSH-Kennung"
        },
        {
          adres : 1,
          shortName : "kolor / producent",
          bajt : 4,
          name : "aktuelle BC-Farbe"
        },
        {
          adres : 1,
          shortName : "Esta",
          bajt : 4,
          name : "Füller- EMU-Konturnummer"
        },
        {
          adres : 1,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 1,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 1,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        },
        {
          adres : 1,
          shortName : "35",
          bajt : 2,
          name : "Kennnummer- Werksnummer"
        }
        
      ];
    
    
    
    }
    
    }