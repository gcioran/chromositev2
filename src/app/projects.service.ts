import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  items = [
  {path:'images/projects/O House/1',
  text:'O House',
  sideDescription: {
    title: 'O House',
    body : {RO: 'Locație: Sânandrei, România\nCategorie: Rezidențial\nSuprafață teren: 500 mp\nSuprafață construită: 150 mp',
            EN: 'Location: Sânandrei, Romania\nCategory: Residential\nLand area: 500 sq m\nBuild-up area: 150 sq m '}
  },
    src:[
    {pic:'images/projects/O House/1'},
    {pic:'images/projects/O House/2'},
    {pic:'images/projects/O House/3'},
    {pic:'images/projects/O House/4'},
    {pic:'images/projects/O House/5'},
    {pic:'images/projects/O House/6'},
    {pic:'images/projects/O House/7'},
    // {text : {RO: '',
    //         EN: ''}
    // }
    ]
  },
  {path:'images/projects/MDA House/1',
  text:'MDA House',
  sideDescription: {
    title: 'MDA House',
    body : {RO: 'Locație: Oravița, România\nCategorie: Rezidențial\nSuprafață teren: 1.235 mp\nSuprafață construită: 160 mp',
            EN: 'Location: Oravita, Romania\nCategory: Residential\nLand area: 1.235 sq m\nBuild-up area: 160 sq m'}
  },
    src:[
    {pic:'images/projects/MDA House/1'},
    {pic:'images/projects/MDA House/2'},
    {pic:'images/projects/MDA House/3'},
    {pic:'images/projects/MDA House/4'},
    {pic:'images/projects/MDA House/5'},
    // {text : {RO: '',
    //         EN: ''}
    // }
    ]
  },
  {path:'images/projects/P House/1',
  text:'P House',
  sideDescription: {
    title: 'P House',
    body : {RO: 'Locație: Moșnița, România\nCategorie: Rezidențial\nSuprafață teren: 621 mp\nSuprafață construită: 240 mp',
            EN: 'Location:Moșnița, Romania\nCategory: Residential\nLand area: 621 sq m\nBuild-up area: 240 sq m'}
  },
    src:[
    {pic:'images/projects/P House/1'},
    {pic:'images/projects/P House/2'},
    {pic:'images/projects/P House/3'},
    {pic:'images/projects/P House/4'}
    ]
  },
  {path:'images/projects/RC Residence/1',
  text:'RC Residence',
  sideDescription: {
    title: 'RC Residence',
    body : {RO: 'CHROMOSOME x BMB Concept\nLocație: Timișoara, România\nCategorie: Rezidențial\nSuprafață teren: 2.100 mp\nSuprafață construită: 1.900 mp',
            EN: 'CHROMOSOME x BMB Concept\nLocation: Timișoara, Romania\nCategory: Residential\nLand area: 2.100 sq m\nBuild-up area: 1.900 sq m '}
  },
    src:[
    {pic:'images/projects/RC Residence/1'},
    {pic:'images/projects/RC Residence/2'},
    {pic:'images/projects/RC Residence/3'},
    {pic:'images/projects/RC Residence/4'},
    {pic:'images/projects/RC Residence/5'}
    ]
  },
  {path:'images/projects/DPX houses/P7/P700',
  text:'DPX no. 7',
  sideDescription: {
    title: 'DPX no. 7',
    body : {RO: 'Locație: Moșnița, România\nCategorie: Rezidențial\nSuprafață teren: 786 mp\nSuprafață construită: 213.72 mp',
            EN: 'Location: Moșnița, Romania\nCategory: Residential\nLand area: 786 sq m\nBuild-up area: 213.72 sq m '}
  },
    src:[
    {pic:'images/projects/DPX houses/P7/P700'},
    {pic:'images/projects/DPX houses/P7/P701'},
    {pic:'images/projects/DPX houses/P7/P702'},
    {pic:'images/projects/DPX houses/P7/P703'},
    {pic:'images/projects/DPX houses/P7/P704'},
    {pic:'images/projects/DPX houses/P7/P705'},
    // {text : {RO: '',
    //         EN: ''}
    // }
    ]
  },
  {path:'images/projects/DPX houses/P15/P1501',
  text:'DPX no. 15',
  sideDescription: {
    title: 'DPX no. 15',
    body : {RO: 'Locație: Moșnița, România\nCategorie: Rezidențial\nSuprafață teren: 678 mp\nSuprafață construită: 159.16 mp',
            EN: 'Location: Moșnița, Romania\nCategory: Residential\nLand area: 678 sq m\nBuild-up area: 159.16 sq m'}
  },
    src:[
    {pic:'images/projects/DPX houses/P15/P1501'},
    {pic:'images/projects/DPX houses/P15/P1502'},
    {pic:'images/projects/DPX houses/P15/P1503'},
    {pic:'images/projects/DPX houses/P15/Cartier01'},
    {pic:'images/projects/DPX houses/P15/Cartier02'},
    {pic:'images/projects/DPX houses/P15/CartierDaynoNewimoA'},
    {pic:'images/projects/DPX houses/P15/CartierNightnonewimoB'},
    // {text : {RO: '',
    //         EN: ''}
    // }
    ]
  },
  {path: 'images/projects/V_Extension/0',
  text: 'V Extension',
  sideDescription: {
    title: 'V Extension',
    body : {RO: 'Locație: Vinga, România\nCategorie: Rezidențial\nSuprafață teren: 1200 mp\nSuprafața construita: 180 mp',
            EN: 'Location: Vinga, România\nCategory: Residential\nArea: 1200 sq m\nBuilt-up area: 180 sq m'}
    },
  src:[
{pic: 'images/projects/V_Extension/0'},
{pic: 'images/projects/V_Extension/1'},
{pic: 'images/projects/V_Extension/2'},
{pic: 'images/projects/V_Extension/3'}
    ]
  },
  // {path:'images/projects/Industrial architecture/Hala/1',
  // text:'N industries',
  // sideDescription: {
  //   title: 'N industries',
  //   body : {RO: 'CHROMOSOME x BMB Concept\nLocație: Nădab, Arad, România\nCategorie: Arhitecură industrială\nSuprafață teren: 37.000 mp\nSuprafață construită: 8.800 mp',
  //           EN: 'CHROMOSOME x BMB Concept\nLocation: Nădab, Arad, Romania\nCategory: Industrial architecture\nLand area: 37.000 sq m\nBuild-up area: 8.800 sq m'}
  // },
  //   src:[
  //   {pic:'images/projects/Industrial architecture/Hala/1'},
  //   {pic:'images/projects/Industrial architecture/Hala/2'},
  //   // {text : {RO: '',
  //   //         EN: ''}
  //   // }
  //   ]
  // },
    {path: 'images/projects/MP_Studio/01',
    text: 'MP Studio',
    sideDescription: {
      title: 'MP Studio',
      body : {RO: 'Locație: Timisoara, România\nCategorie: Amenajare interioară\nSuprafață: teren: 35 mp\n\nAutor: Dana Cioran\nCoautor: Gabriela Sava',
              EN: 'Location: Timisoara, România\nCategory: Interior design\nArea: 35 sq m\n\nAuthor: Dana Cioran\nCoauthor: Gabriela Sava'}
      },
    src:[
{pic: 'images/projects/MP_Studio/01'},
{pic: 'images/projects/MP_Studio/02'},
{pic: 'images/projects/MP_Studio/03'},
{pic: 'images/projects/MP_Studio/04'},
{pic: 'images/projects/MP_Studio/05'}
      ]
    },
    {path: 'images/projects/AldraDent/01',
    text: 'AldraDent',
    sideDescription: {
      title: 'AldraDent',
      body : {RO: 'Locație: Cluj-Napoca, România\nCategorie: Amenajare interioară\nSuprafață: 70 mp\n\nAutor: Dana Cioran',
              EN: 'Location: Cluj-Napoca, România\nCategory: Interior design\nArea: 70 sq m\n\nAuthor: Dana Cioran'}
      },
    src:[
{pic: 'images/projects/AldraDent/01'},
{pic: 'images/projects/AldraDent/location'},
{pic: 'images/projects/AldraDent/03'},
{pic: 'images/projects/AldraDent/04'},
{pic: 'images/projects/AldraDent/05'},
{pic: 'images/projects/AldraDent/06'},
{pic: 'images/projects/AldraDent/07'},
{pic: 'images/projects/AldraDent/08'}
      ]
    },
    {path:'images/projects/Hreniuc/01',
    text:'H.LA House',
    sideDescription: {
      title: 'H.LA House',
      body : {RO: 'CHROMOSOME x BMB Concept\nLLocație: Giarmata, România\nCategorie: Rezidențial\nSuprafață: teren: 594 mp\nSuprafața construita: 292 mp',
              EN: 'CHROMOSOME x BMB Concept\nLLocation: Giarmata, România\nCategory: Residential\nArea: 594 sq m\nBuilt-up area: 292 sq m'}
      },
    src:[
{pic:'images/projects/Hreniuc/01'},
{pic:'images/projects/Hreniuc/02'},
{pic:'images/projects/Hreniuc/03'},
{pic:'images/projects/Hreniuc/04'},
{pic:'images/projects/Hreniuc/05'}
      ]
    },
    {path:'images/projects/AVA_OFFICE/05',
    text:'AVA Office',
    sideDescription: {
      title: 'AVA Office',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Amenajare interioară\nSuprafață: teren: 21 mp\n\nAutor: Zeno Ardelean\nCoautor: Dana Cioran',
              EN: 'Location: Timișoara, România\nCategory: Interior design\nArea: 21 sq m\n\nAuthor: Zeno Ardelean\nCoauthor: Dana Cioran'}
      },
    drawings:8,
    src:[
{pic:'images/projects/AVA_OFFICE/05'},
{pic:'images/projects/AVA_OFFICE/location'},
{pic:'images/projects/AVA_OFFICE/01'},
{pic:'images/projects/AVA_OFFICE/02'},
{pic:'images/projects/AVA_OFFICE/03'},
{pic:'images/projects/AVA_OFFICE/04'},
{pic:'images/projects/AVA_OFFICE/06'},
{pic:'images/projects/AVA_OFFICE/07'},
{pic:'images/projects/AVA_OFFICE/01_AV_0_PLAN'}
      ]
    },
    {path:'images/projects/BATH_design/03cover',
    text:'BATH design',
    sideDescription: {
      title: 'BATH design',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Amenajare interioară\nSuprafață: 3 mp\n\nAutor: Dana Cioran\nFoto: Ovidiu Micșa',
              EN: 'Location: Timișoara, România\nCategory: Interior design\nArea: 3 sq m\n\nAuthor: Dana Cioran\nPhoto: Ovidiu Micșa'}
      },
    src:[
{pic:'images/projects/BATH_design/03cover'},
{pic:'images/projects/BATH_design/location'},
{pic:'images/projects/BATH_design/01'},
{pic:'images/projects/BATH_design/02'},
{pic:'images/projects/BATH_design/04'},
{pic:'images/projects/BATH_design/05'},
{pic:'images/projects/BATH_design/06'},
{pic:'images/projects/BATH_design/07'},
{pic:'images/projects/BATH_design/08'},
{pic:'images/projects/BATH_design/09'},
{text : {RO: 'Pentru a optimiza un spațiu foarte mic, funcționalitatea este importantă. Toate obiectele sunt grupate pe un singur perete. Lavoarul este integrat într-o mască împreună cu rezervorul. Dusul este despărțit doar printr-un panou de sticlă.',
EN: 'To optimize a very small space, functionality is important. All objects are grouped on a single wall. The basin is integrated into a mask along with the in-wall tank system. The shower is separated only by a glass panel.'}
}
      ]
    },
    {path:'images/projects/CHROMOSOME_OFFICE/04',
    text:'CH Office',
    sideDescription: {
      title: 'CHROMOSOME Office',
      body : {RO: 'Locație: Utvin, România\nCategorie: Amenajare interioară\nSuprafață: 65 mp\n\nAutor: Dana Cioran, Zeno Ardelean\nFoto: Norbert Ianko',
              EN: 'Location: Utvin, România\nCategory: Interior design\nArea: 65 sq m\n\nAuthor: Dana Cioran, Zeno Ardelean\nPhoto: Norbert Ianko'}
      },
    drawings:2,
    src:[
      {pic:'images/projects/CHROMOSOME_OFFICE/04'},
      {pic:'images/projects/CHROMOSOME_OFFICE/location'},
      {pic:'images/projects/CHROMOSOME_OFFICE/001'},
      {pic:'images/projects/CHROMOSOME_OFFICE/002'},
      {pic:'images/projects/CHROMOSOME_OFFICE/003'},
      {pic:'images/projects/CHROMOSOME_OFFICE/004'},
      {pic:'images/projects/CHROMOSOME_OFFICE/01'},
      {pic:'images/projects/CHROMOSOME_OFFICE/02'},
      {pic:'images/projects/CHROMOSOME_OFFICE/03'},
      {pic:'images/projects/CHROMOSOME_OFFICE/05'},
      {pic:'images/projects/CHROMOSOME_OFFICE/06'},
      {pic:'images/projects/CHROMOSOME_OFFICE/07'},
      {pic:'images/projects/CHROMOSOME_OFFICE/08'},
      {pic:'images/projects/CHROMOSOME_OFFICE/09'}
      ]
    },
    {path:'images/projects/SDLT_Extension/cover06',
    text:'SDLT',
    sideDescription: {
      title: 'SDLT Extension',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Rezidențial\nSuprafață teren: 468 mp\nSuprafață constructie\nexistentă: 155 mp\nSuprafață extindere: 110 mp\n\nAutor: Dana Cioran',
              EN: 'Location: Timișoara, România\nCategory: Residential\nLand area: 468 sq m\nExisting built-up area 155 sq m\nExtension area: 110 sq m\n\nAuthor: Dana Cioran'}
      },
    src:[
{pic:'images/projects/SDLT_Extension/cover06'},
{pic:'images/projects/SDLT_Extension/location'},
{pic:'images/projects/SDLT_Extension/01'},
{pic:'images/projects/SDLT_Extension/02'},
{pic:'images/projects/SDLT_Extension/03'},
{pic:'images/projects/SDLT_Extension/04'},
{pic:'images/projects/SDLT_Extension/05'}
      ]
    },
    {path:'images/projects/SEITIN_House/01',
    text:'S House',
    sideDescription: {
      title: 'SEITIN House',
      body : {RO: 'Locație: Șeitin, România\nCategorie: Rezidențial\nSuprafață: teren: 1854 mp\nSuprafață: construită: 255 mp\n\nAutor: Dana Cioran',
              EN: 'Location: Șeitin, România\nCategory: Residential\nLand area: 1854 sq m\nBuilt-up area 1854 sq m\n\nAuthor: Dana Cioran'}
      },
    src:[
{pic:'images/projects/SEITIN_House/01'},
{pic:'images/projects/SEITIN_House/location'},
{pic:'images/projects/SEITIN_House/02'},
{pic:'images/projects/SEITIN_House/03'}
      ]
    },
    {path:'images/projects/Coffee_house/cover01',
    text:'Coffeehouse',
    sideDescription: {
      title: 'Coffeehouse',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Amenajare interioară\nSuprafață: 80 mp\n\nAutor: Dana Cioran, Zeno Ardelean',
              EN: 'Location: Timișoara, România\nCategory: Interior design\nArea: 80 sq m\n\nAuthor: Dana Cioran, Zeno Ardelean'}
      },
    src:[
{pic:'images/projects/Coffee_house/cover01'},
{pic:'images/projects/Coffee_house/location'},
{pic:'images/projects/Coffee_house/02'},
{pic:'images/projects/Coffee_house/03'},
{pic:'images/projects/Coffee_house/04'},
{pic:'images/projects/Coffee_house/05'},
{pic:'images/projects/Coffee_house/06'},
{pic:'images/projects/Coffee_house/07'},
{pic:'images/projects/Coffee_house/08'},
{text : {RO: 'Ideea de amenajare a cafenelei a fost conturată cu atenție față de condițiile amplasamentului. Pe de o parte, conceptul a pornit de la forma fizică a spațiului. Astfel, funcționalitatea, fluxurile de mișcare, caracteristicile plastice, chiar și forma elementelor decorative sunt gândite în concordanță cu spațiul exisent. Pe de altă parte, locația spațiului a generat o serie de decizii, vizibile la partea exterioară a cafenelei. Plantele din amenajarea exterioară reprezintă o bariera verde ce separă terasa cafenelei de bulevardul aglomerat. Suportul-ghiveci al acestui gard viu devine și loc de stat pentru terasă.',
EN: 'The idea of setting up the café was carefully outlined in terms of location. The concept started from the physical form of space. Thus, functionality, motion flows, plastic features, even the shape of the decorative elements are designed in accordance with the existing space. On the other hand, the location of the space generated a series of decisions, visible at the outside of the café. The plants in the outdoors are a green barrier that separates the café terrace from the crowded boulevard. The pothole support of this hedge also becomes a sitting sitting.'}
}
      ]
    },
    {path:'images/projects/CA_House/04_R1_1a-2',
    text:'CA House',
    sideDescription: {
      title: 'CA House',
      body : {RO: 'Locație: Moșnița, România\nCategorie: Rezidențial\nSuprafață: teren: 463 mp\nSuprafață: construită: 185 mp\n\nAutor: Dana Cioran\nCoautor: Zeno Ardelean',
              EN: 'Location: Moșnița, România\nCategory: Residential\nLand area: 463 sq m\nBuilt-up area 185 sq m\n\nAuthor: Dana Cioran\nCoauthor: Zeno Ardelean'}
      },
    drawings:5,
    src:[
     {pic:'images/projects/CA_House/04_R1_1a-2'},
     {pic:'images/projects/CA_House/01_CA_LOCATION'},
     {pic:'images/projects/CA_House/02_R1'},
     {pic:'images/projects/CA_House/03_R1_1 sus'},
     {pic:'images/projects/CA_House/04_R1_1a-2'},
     {pic:'images/projects/CA_House/05_PLAN_SITUATIE'},
     {pic:'images/projects/CA_House/06_PLAN_PARTER'},
     {pic:'images/projects/CA_House/07_PLAN_ETAJ'},
     {pic:'images/projects/CA_House/08'},
     {pic:'images/projects/CA_House/09'},
     {pic:'images/projects/CA_House/10'},
     {pic:'images/projects/CA_House/11'},
     {text : {RO: 'Proiectul pornește de la amplasarea unui corp pe un sit cu un front de sub 11m. Funcțiunile obișnuite pentru o casă din zona respectivă au trebuit distribuite de-a lungul parcelei, casa devenind foarte lungă. Senzația de casă-vagon este spartă prin fragmentarea volumului în cubulețe suprapuse parțial. Prin distribuirea „pieselor de lego” se urmărește orientarea corectă a camerelor spre soare, crearea de spațiu intim, deschiderea spre curte și orientarea față-n față a camerelor. Așezarea cuburilor pe sit crează curți secundare cu caractere diferite, în ideea spargerii liniarității volumului.',
             EN: 'The project aimed to create a dwelling on a site with a frontal side of under 11 m. The typical functions for a house in the area had to be distributed along the site, making the house very long. The feeling of a long train-type house is put out by its fragmentation into small, partially-overlapping cubes. As we arranged the lego bricks, we aimed to direct the rooms towards the sun, to create intimate spaces, to open the house towards the garden and to place the rooms opposite of each other. By placing the cubes on the site, we created secondary gardens with distinct characters so as to break the linearity of the structure.'}
     }
      ]
    },
    {path:'images/projects/LE_MONOLITHE/01',
    text:'LE MONOLITHE',
    sideDescription: {
      title: 'LE MONOLITHE',
      body : {RO: 'Concurs\n\nAutor: Dana Cioran\nCoautor: Zeno Ardelean',
              EN: 'Competition\n\nAuthor: Dana Cioran\nCoauthor: Zeno Ardelean'}
    },
     src:[
     {pic:'images/projects/LE_MONOLITHE/01'},
     {text : {RO: 'Tema concursului a fost Transportul în 2020. Creșterea numărului de mașini electrice, automatizarea accelerată și noile tehnologii emergente vor schimba treptat modul în care călătorim. Situat pe o autostradă din Franța, proiectul reinterpretează forma arhetipală a arcului istoric, transformând containerele de mărfuri într-un corp monolitic. Finisajele lucioase și ecranele inteligente susțin ideea unui nou tip de arc, a unei porți simbolice spre un viitor optimist.',
             EN: 'The subject of the competition was Transport in 2020. The increase in the number of electric cars, the accelerated automation and the emerging technologies will gradually change the way we travel. Situated on a motorway in France, the project re-interprets the archetypal shape of the historical Arc de Triomphe, transforming the set of shipping containers into a monolithic object. The glossy finishing and the smart screens support the idea of a new type of arch – that of a symbolic gate towards a brighter future.'}
     }
      ]
    },
    {path:'images/projects/RB_House/C2',
    text:'RB House',
    sideDescription: {
      title: 'RB House',
      body : {RO: 'Locație: Giarmata, România\nCategorie: Rezidential\nSuprafață: teren: 400 mp\nSuprafață: construită: 125 mp\n\nAutor: Dana Cioran, Zeno Ardelean',
              EN: 'Location: Giarmata, România\nCategory: Residential\nLand area: 400 sq m\nBuilt-up area: 125 sq m\n\nAuthor: Dana Cioran, Zeno Ardelean'}
      },
    drawings:2,
    src:[
     {pic:'images/projects/RB_House/C2'},
     {pic:'images/projects/RB_House/C1x'},
     {pic:'images/projects/RB_House/PLAN PARTER'},
     {pic:'images/projects/RB_House/PLAN ETAJ'},
     {pic:'images/projects/RB_House/PLAN SITUATIE'},
     {pic:'images/projects/RB_House/SCHEME3'},
     {pic:'images/projects/RB_House/SCHEME2'},
     {pic:'images/projects/RB_House/SCHEME1'},
     {pic:'images/projects/RB_House/SCHEME4'},
     {pic:'images/projects/RB_House/SCHEME5'},
     {pic:'images/projects/RB_House/SCHEME6'},
     {text : {RO: 'Casa RB pornește de la două volume care preiau înalțimea vecinilor. Fiecare volum adăpostește o generație a familiei. Parterul conține un living comun, iar etajul are un hol generos care devine zona de zi privată pentru familia tânără. Fațadele sunt tratate simplu, fiecare cu câte un material. Decupajele formează ferestre pătrate, iar copertinele dinspre curte și de la acces accentuează forma inițială. Pomul existent pe sit este integrat în designul terasei dinspre curte și devine un centru de atenție.',
             EN: 'RB house starts with two structures mirroring the height of the neighboring houses. Each structure houses a generation of a family. The ground floor contains a common living-room, while the upper floor has a generous lobby which represents the private living area for the younger generation. The façades follow a simple design, each one with its own material. The incisions follow the shape of the square windows, while the sunshade overlooking the garden and the access highlight its initial shape. The tree on the site was integrated in the terrace design towards the garden making it a valuable focus point.'}
     }
      ]
    },
    {path:'images/projects/preluari/MAGAZIN_DUMBRAVITA/01',
    text:'DB Shop Facade',
    sideDescription: {
      title: 'DB Shop Facade',
      body : {RO: 'Locație: Dumbrăvița, jud. Timiș, România\nCategorie: preluare / refurbished\n\nAutor: Dana Cioran',
              EN: 'Location: Dumbrăvița, jud. Timiș, România\nCategory: Refurbished\n\nAuthor: Dana Cioran'}
      },
    src:[
     {pic:'images/projects/preluari/MAGAZIN_DUMBRAVITA/01'},
     {pic:'images/projects/preluari/MAGAZIN_DUMBRAVITA/02_M_DUMBRAVITA_LOCATION'},
     {pic:'images/projects/preluari/MAGAZIN_DUMBRAVITA/03'},
     {pic:'images/projects/preluari/MAGAZIN_DUMBRAVITA/04alimentara_EXISTENT'},
     {pic:'images/projects/preluari/MAGAZIN_DUMBRAVITA/05alimentara_PROPUS'},
     {text : {RO: 'Fațada clădirii construite înainte de \'89 a fost recondiționată și estetizată prin mijloace minimale, folosind vopsea și lemn. Liniile haotice ale fațadei au fost separate în registre orizontale, fațada a fost „cumințită”, iar textele împrăștiate îi dau personalitate.',
             EN: 'The façade of the 80s building was redone and designed with minimum intervention, using paint and wood. The chaotic lines of the façade were separated in horizontal belts, the façade was therefore tamed, while the scattered texts provide a certain personality.'}
     }
    ]
    },
    {path:'images/projects/preluari/ACCES_BRUNCH/cover',
    text:'BRUNCH Access',
    sideDescription: {
      title: 'BRUNCH Access',
      body : {RO: 'Locație: Timișoara, România\nCategorie: preluare / refurbished\n\nAutor: Dana Cioran\nCoautor: Zeno Ardelean',
              EN: 'Location: Timișoara, România\nCategory: Refurbished\n\nAuthor: Dana Cioran\nCoauthor: Zeno Ardelean'}
      },
    drawings:3,
    src:[
     {pic:'images/projects/preluari/ACCES_BRUNCH/00'},
     {pic:'images/projects/preluari/ACCES_BRUNCH/01_BRUNCH_LOCATION'},
     {pic:'images/projects/preluari/ACCES_BRUNCH/02_existent'},
     {pic:'images/projects/preluari/ACCES_BRUNCH/03_schema1'},
     {pic:'images/projects/preluari/ACCES_BRUNCH/04'},
     {pic:'images/projects/preluari/ACCES_BRUNCH/05realizat'},
     {text : {RO: 'Accesul în Brunch a fost tratat ca o primă intervenție pe fațada clădirii. Se propune redefinirea parterului întregii fațade prin folosirea unei geometrii unitare. Cutia contorsionată preia liniile de pe fațadă și le reinterpretează. Golul se aliniază cu solbancul ferestrei de deasupra și forma de pâlnie invită trecătorii spre acces.',
             EN: 'Designing the access to Brunch mini-restaurant became a first intervention on the façade of the building. We proposed a redefinition of the ground floor for the entire building by using a unitary geometry. The twisted box takes over the lines on the façade and re-interprets them. The excavated door is in perfect line with the window sill above, while the rectangular funnel shape invites the passers-by inside.'}
     }
      ]
    }
////here starts renderings/////
    ];

  constructor() { }
}
