export class Mds{
    private adres : any;
    private chemAdres : any;
    private lac : any;
    constructor(){

    }


    decToHex(adres: string, tab: any) {

    let i = 0;
    let hex =[];
    let newtab = []
      for (const key in tab) {
        let tabHex;
        if (tab.hasOwnProperty(key)) {
          tabHex= tab[key]  //przypisanie elementu tablicy do zmiennej
          tabHex.adres+=adres; // ustawienie adresów docelowego
          hex[i] = tabHex.adres.toString(16); //zmiana aresów dec na hex i zapisanie do tablicy
          tabHex.adres = hex[i].toUpperCase();
          i++
          newtab.push(tabHex) //tworzenie nowej tablicy dla adresów hex
        }
      }
     return newtab;
    }

    getAdresChem(){
      return this.chemAdres =[
           {
          adres : 494,
          shortName : "0XXX",
          bajt : 4,
          name : "skid"
        },
        {
          adres : 498,
          shortName : "chem 01",
          bajt : 2,
          name : "typ skida"
        },
        {
          adres : 500,
          shortName : "35",
          bajt : 2,
          name : "Werk"
        },
        {
          adres : 502,
          shortName : "20XX",
          bajt : 4,
          name : "ROK"
        },
        {
          adres : 506,
          shortName : "12345014",
          bajt :8,
          name : "KNR"
        },
        {
          adres : 514,
          shortName : "TEIL",
          bajt : 4,
          name : "MODEL"
        },
        {
          adres : 524,
          shortName : "Magazyn po KTL 15",
          bajt : 2,
          name : "Magazyn"
        },
        {
          adres : 608,
          shortName : "Prese/Messe",
          bajt : 4,
          name : "Abdichten GAD/FAD"
        },
        {
          adres : 620,
          shortName : "wjazd UBS",
          bajt : 2,
          name : "UBS Aufnahme"
        },
        {
          adres : 622,
          shortName : "Program",
          bajt : 4,
          name : "UBS-Roboter"
        },
        {
          adres : 630,
          shortName : "wyjazd",
          bajt : 4,
          name : "UBS- Abgabe"
        }

      ];

    }

    getLac(){
      return this.lac = [
        {
          adres : "C",
          shortName : "OFFSET  0500",
          bajt : 4,
          name : "OFFSET "
        },

        {
          adres : "10",
          shortName : "0XXX",
          bajt : 4,
          name : "SKID "
        },

        {
          adres : "14",
          shortName : "03 Lac",
          bajt : 3,
          name : "typ skida "
        },
      ];
    }

    getMenu(){
    return this.adres = [
      {
        adres : 0,
        shortName : "35",
        bajt : 2,
        name : "KNR- Werk"
      },
      {
        adres : 2,
        shortName : "2018",
        bajt : 2,
        name : "ProduktionsJahr"
      },
      {
        adres : 6,
        shortName : "12345014",
        bajt : 8,
        name : "Kennnummer"
      },
      {
        adres : 14,
        shortName : "TEIL",
        bajt : 4,
        name : "TYP"
      },
      {
        adres : 50,
        shortName : "01/02",
        bajt :2,
        name : "ECOPUSH-kennung"
      },
      {
        adres : 54,
        shortName : "kolor",
        bajt : 4,
        name : "aktuelle BC-Farbe"
      },
      {
        adres : 158,
        shortName : "ESTA",
        bajt : 4,
        name : "Fuller EMU-konter"
      },
      {
        adres : 168,
        shortName : "0009",
        bajt : 4,
        name : "Fuller Farben"
      },
      {
        adres : 176,
        shortName : "ESTA",
        bajt : 4,
        name : "Fuller-ESTA"
      },
      {
        adres : 196,
        shortName : "szczotki",
        bajt : 4,
        name : "Waschen"
      },
      {
        adres : 220,
        shortName : "kipstacja 1",
        bajt : 2,
        name : "Waschen-kipstacja"
      },
      {
        adres : 222,
        shortName : "kipstacja 2",
        bajt : 2,
        name : "Waschen-kipstacja"
      },

      {
        adres : 244,
        shortName : "kolor/ producent",
        bajt : 4,
        name : "BC-FARBE"
      },
      {
        adres : 262,
        shortName : "szrot 06 -99",
        bajt : 2,
        name : "BC-Zahler"
      },
      {
        adres : 268,
        shortName : "ESTA",
        bajt : 4,
        name : "BC-ESTA"
      },
      {
        adres : 274,
        shortName : "ESTA",
        bajt : 4,
        name : "BC- Spray ESTA"
      },

      {
        adres : 296,
        shortName : "ROBOT",
        bajt : 16,
        name : "CC- Immemroboter"
      },

      {
        adres : 314,
        shortName : "ESTA",
        bajt : 4,
        name : "CC-ESTA"
      },
      {
        adres : 352,
        shortName : " 03",
        bajt : 2,
        name : "HRK - Aufnahme"
      },
      {
        adres : 358,
        shortName : " 03",
        bajt : 4,
        name : "HRK - Flutsorte"
      },
      {
        adres : 370,
        shortName : " 03",
        bajt : 4,
        name : "HRK - Transportposition"
      },
      {
        adres : 370,
        shortName : " 03",
        bajt : 2,
        name : "HRK - Transportposition"
      },
      {
        adres : 372,
        shortName : " 09 max/08 krotki",
        bajt : 10,
        name : "HRK - Bereichsreserve"
      },


      ];
    }
    }
