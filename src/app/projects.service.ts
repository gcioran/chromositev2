import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  items = [
    {path: 'images/projects/MP Studio/01',
    text: 'MP Studio',
    sideDescription: {
      title: 'MP Studio',
      body : {RO: 'Locație: Timisoara, România\nCategorie: Amenajare interioară\nSuprafață: teren: 35 mp\n\nAutor: Dana Ardelean\nCoautor: Gabriela Sava',
              EN: 'Location: Timisoara, România\nCategory: Interior design\nArea: 35 sq m\n\nAuthor: Dana Ardelean\nCoauthor: Gabriela Sava'}
      },
    src:[
{pic: 'images/projects/MP Studio/01'},
{pic: 'images/projects/MP Studio/02'},
{pic: 'images/projects/MP Studio/03'},
{pic: 'images/projects/MP Studio/04'},
{pic: 'images/projects/MP Studio/05'}
      ]
    },
    {path: 'images/projects/V Extension/01',
    text: 'V Extension',
    sideDescription: {
      title: 'V Extension',
      body : {RO: 'Locație: Vinga, România\nCategorie: Rezidențial\nSuprafață teren: 1200 mp\nSuprafața construita: 180 mp \n\nAutor: Dana Ardelean',
              EN: 'Location: Vinga, România\nCategory: Residential\nArea: 1200 sq m\nBuilt-up area: 180 sq m \n\nAuthor: Dana Ardelean'}
      },
    src:[
{pic: 'images/projects/V Extension/01'},
{pic: 'images/projects/V Extension/02'},
{pic: 'images/projects/V Extension/03'},
{pic: 'images/projects/V Extension/04'}
      ]
    },
    {path: 'images/projects/AldraDent/01',
    text: 'AldraDent',
    sideDescription: {
      title: 'AldraDent',
      body : {RO: 'Locație: Cluj-Napoca, România\nCategorie: Amenajare interioară\nSuprafață: 70 mp\n\nAutor: Dana Ardelean',
              EN: 'Location: Cluj-Napoca, România\nCategory: Interior design\nArea: 70 sq m\n\nAuthor: Dana Ardelean'}
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
      body : {RO: 'Locație: Giarmata, România\nCategorie: Rezidențial\nSuprafață: teren: 594 mp\nSuprafața construita: 292 mp \n\nAutor: Dana Ardelean\nColaboratori: Bogdan Duica, Petra Popa',
              EN: 'Location: Giarmata, România\nCategory: Residential\nArea: 594 sq m\nBuilt-up area: 292 sq m \n\nAuthor: Dana Ardelean\nCollaborators: Bogdan Duica, Petra Popa'}
      },
    src:[
{pic:'images/projects/Hreniuc/01'},
{pic:'images/projects/Hreniuc/02'},
{pic:'images/projects/Hreniuc/03'},
{pic:'images/projects/Hreniuc/04'},
{pic:'images/projects/Hreniuc/05'}
      ]
    },
    {path:'images/projects/AVA OFFICE/05',
    text:'AVA Office',
    sideDescription: {
      title: 'AVA Office',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Amenajare interioară\nSuprafață: teren: 21 mp\n\nAutor: Zeno Ardelean\nCoautor: Dana Ardelean',
              EN: 'Location: Timișoara, România\nCategory: Interior design\nArea: 21 sq m\n\nAuthor: Zeno Ardelean\nCoauthor: Dana Ardelean'}
      },
    drawings:8,
    src:[
{pic:'images/projects/AVA OFFICE/05'},
{pic:'images/projects/AVA OFFICE/location'},
{pic:'images/projects/AVA OFFICE/01'},
{pic:'images/projects/AVA OFFICE/02'},
{pic:'images/projects/AVA OFFICE/03'},
{pic:'images/projects/AVA OFFICE/04'},
{pic:'images/projects/AVA OFFICE/06'},
{pic:'images/projects/AVA OFFICE/07'},
{pic:'images/projects/AVA OFFICE/01_AV_0_PLAN'}
      ]
    },
    {path:'images/projects/BATH design/03cover',
    text:'BATH design',
    sideDescription: {
      title: 'BATH design',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Amenajare interioară\nSuprafață: 3 mp\n\nAutor: Dana Ardelean\nFoto: Ovidiu Micșa',
              EN: 'Location: Timișoara, România\nCategory: Interior design\nArea: 3 sq m\n\nAuthor: Dana Ardelean\nPhoto: Ovidiu Micșa'}
      },
    src:[
{pic:'images/projects/BATH design/03cover'},
{pic:'images/projects/BATH design/location'},
{pic:'images/projects/BATH design/01'},
{pic:'images/projects/BATH design/02'},
{pic:'images/projects/BATH design/04'},
{pic:'images/projects/BATH design/05'},
{pic:'images/projects/BATH design/06'},
{pic:'images/projects/BATH design/07'},
{pic:'images/projects/BATH design/08'},
{pic:'images/projects/BATH design/09'},
{text : {RO: 'Pentru a optimiza un spațiu foarte mic, funcționalitatea este importantă. Toate obiectele sunt grupate pe un singur perete. Lavoarul este integrat într-o mască împreună cu rezervorul. Dusul este despărțit doar printr-un panou de sticlă.',
EN: 'To optimize a very small space, functionality is important. All objects are grouped on a single wall. The basin is integrated into a mask along with the in-wall tank system. The shower is separated only by a glass panel.'}
}
      ]
    },
    {path:'images/projects/CHROMOSOME OFFICE/04',
    text:'CH Office',
    sideDescription: {
      title: 'CHROMOSOME Office',
      body : {RO: 'Locație: Utvin, România\nCategorie: Amenajare interioară\nSuprafață: 65 mp\n\nAutor: Dana Ardelean, Zeno Ardelean\nFoto: Norbert Ianko',
              EN: 'Location: Utvin, România\nCategory: Interior design\nArea: 65 sq m\n\nAuthor: Dana Ardelean, Zeno Ardelean\nPhoto: Norbert Ianko'}
      },
    drawings:2,
    src:[
      {pic:'images/projects/CHROMOSOME OFFICE/04'},
      {pic:'images/projects/CHROMOSOME OFFICE/location'},
      {pic:'images/projects/CHROMOSOME OFFICE/001'},
      {pic:'images/projects/CHROMOSOME OFFICE/002'},
      {pic:'images/projects/CHROMOSOME OFFICE/003'},
      {pic:'images/projects/CHROMOSOME OFFICE/004'},
      {pic:'images/projects/CHROMOSOME OFFICE/01'},
      {pic:'images/projects/CHROMOSOME OFFICE/02'},
      {pic:'images/projects/CHROMOSOME OFFICE/03'},
      {pic:'images/projects/CHROMOSOME OFFICE/05'},
      {pic:'images/projects/CHROMOSOME OFFICE/06'},
      {pic:'images/projects/CHROMOSOME OFFICE/07'},
      {pic:'images/projects/CHROMOSOME OFFICE/08'},
      {pic:'images/projects/CHROMOSOME OFFICE/09'}
      ]
    },
    {path:'images/projects/SDLT Extension/cover06',
    text:'SDLT',
    sideDescription: {
      title: 'SDLT Extension',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Rezidențial\nSuprafață teren: 468 mp\nSuprafață constructie\nexistentă: 155 mp\nSuprafață extindere: 110 mp\n\nAutor: Dana Ardelean',
              EN: 'Location: Timișoara, România\nCategory: Residential\nLand area: 468 sq m\nExisting built-up area 155 sq m\nExtension area: 110 sq m\n\nAuthor: Dana Ardelean'}
      },
    src:[
{pic:'images/projects/SDLT Extension/cover06'},
{pic:'images/projects/SDLT Extension/location'},
{pic:'images/projects/SDLT Extension/01'},
{pic:'images/projects/SDLT Extension/02'},
{pic:'images/projects/SDLT Extension/03'},
{pic:'images/projects/SDLT Extension/04'},
{pic:'images/projects/SDLT Extension/05'}
      ]
    },
    {path:'images/projects/SEITIN House/01',
    text:'S House',
    sideDescription: {
      title: 'SEITIN House',
      body : {RO: 'Locație: Șeitin, România\nCategorie: Rezidențial\nSuprafață: teren: 1854 mp\nSuprafață: construită: 255 mp\n\nAutor: Dana Ardelean',
              EN: 'Location: Șeitin, România\nCategory: Residential\nLand area: 1854 sq m\nBuilt-up area 1854 sq m\n\nAuthor: Dana Ardelean'}
      },
    src:[
{pic:'images/projects/SEITIN House/01'},
{pic:'images/projects/SEITIN House/location'},
{pic:'images/projects/SEITIN House/02'},
{pic:'images/projects/SEITIN House/03'}
      ]
    },
    {path:'images/projects/Coffee house/cover01',
    text:'Coffeehouse',
    sideDescription: {
      title: 'Coffeehouse',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Amenajare interioară\nSuprafață: 80 mp\n\nAutor: Dana Ardelean, Zeno Ardelean',
              EN: 'Location: Timișoara, România\nCategory: Interior design\nArea: 80 sq m\n\nAuthor: Dana Ardelean, Zeno Ardelean'}
      },
    src:[
{pic:'images/projects/Coffee house/cover01'},
{pic:'images/projects/Coffee house/location'},
{pic:'images/projects/Coffee house/02'},
{pic:'images/projects/Coffee house/03'},
{pic:'images/projects/Coffee house/04'},
{pic:'images/projects/Coffee house/05'},
{pic:'images/projects/Coffee house/06'},
{pic:'images/projects/Coffee house/07'},
{pic:'images/projects/Coffee house/08'},
{text : {RO: 'Ideea de amenajare a cafenelei a fost conturată cu atenție față de condițiile amplasamentului. Pe de o parte, conceptul a pornit de la forma fizică a spațiului. Astfel, funcționalitatea, fluxurile de mișcare, caracteristicile plastice, chiar și forma elementelor decorative sunt gândite în concordanță cu spațiul exisent. Pe de altă parte, locația spațiului a generat o serie de decizii, vizibile la partea exterioară a cafenelei. Plantele din amenajarea exterioară reprezintă o bariera verde ce separă terasa cafenelei de bulevardul aglomerat. Suportul-ghiveci al acestui gard viu devine și loc de stat pentru terasă.',
EN: 'The idea of setting up the café was carefully outlined in terms of location. The concept started from the physical form of space. Thus, functionality, motion flows, plastic features, even the shape of the decorative elements are designed in accordance with the existing space. On the other hand, the location of the space generated a series of decisions, visible at the outside of the café. The plants in the outdoors are a green barrier that separates the café terrace from the crowded boulevard. The pothole support of this hedge also becomes a sitting sitting.'}
}
      ]
    },
    {path:'images/projects/CA House/04_R1_1a-2',
    text:'CA House',
    sideDescription: {
      title: 'CA House',
      body : {RO: 'Locație: Moșnița, România\nCategorie: Rezidențial\nSuprafață: teren: 463 mp\nSuprafață: construită: 185 mp\n\nAutor: Dana Ardelean\nCoautor: Zeno Ardelean',
              EN: 'Location: Moșnița, România\nCategory: Residential\nLand area: 463 sq m\nBuilt-up area 185 sq m\n\nAuthor: Dana Ardelean\nCoauthor: Zeno Ardelean'}
      },
    drawings:5,
    src:[
     {pic:'images/projects/CA House/04_R1_1a-2'},
     {pic:'images/projects/CA House/01_CA_LOCATION'},
     {pic:'images/projects/CA House/02_R1'},
     {pic:'images/projects/CA House/03_R1_1 sus'},
     {pic:'images/projects/CA House/04_R1_1a-2'},
     {pic:'images/projects/CA House/05_PLAN_SITUATIE'},
     {pic:'images/projects/CA House/06_PLAN_PARTER'},
     {pic:'images/projects/CA House/07_PLAN_ETAJ'},
     {pic:'images/projects/CA House/08'},
     {pic:'images/projects/CA House/09'},
     {pic:'images/projects/CA House/10'},
     {pic:'images/projects/CA House/11'},
     {text : {RO: 'Proiectul pornește de la amplasarea unui corp pe un sit cu un front de sub 11m. Funcțiunile obișnuite pentru o casă din zona respectivă au trebuit distribuite de-a lungul parcelei, casa devenind foarte lungă. Senzația de casă-vagon este spartă prin fragmentarea volumului în cubulețe suprapuse parțial. Prin distribuirea „pieselor de lego” se urmărește orientarea corectă a camerelor spre soare, crearea de spațiu intim, deschiderea spre curte și orientarea față-n față a camerelor. Așezarea cuburilor pe sit crează curți secundare cu caractere diferite, în ideea spargerii liniarității volumului.',
             EN: 'The project aimed to create a dwelling on a site with a frontal side of under 11 m. The typical functions for a house in the area had to be distributed along the site, making the house very long. The feeling of a long train-type house is put out by its fragmentation into small, partially-overlapping cubes. As we arranged the lego bricks, we aimed to direct the rooms towards the sun, to create intimate spaces, to open the house towards the garden and to place the rooms opposite of each other. By placing the cubes on the site, we created secondary gardens with distinct characters so as to break the linearity of the structure.'}
     }
      ]
    },
    {path:'images/projects/LE MONOLITHE/01',
    text:'LE MONOLITHE',
    sideDescription: {
      title: 'LE MONOLITHE',
      body : {RO: 'Concurs\n\nAutor: Dana Ardelean\nCoautor: Zeno Ardelean',
              EN: 'Competition\n\nAuthor: Dana Ardelean\nCoauthor: Zeno Ardelean'}
    },
     src:[
     {pic:'images/projects/LE MONOLITHE/01'},
     {text : {RO: 'Tema concursului a fost Transportul în 2020. Creșterea numărului de mașini electrice, automatizarea accelerată și noile tehnologii emergente vor schimba treptat modul în care călătorim. Situat pe o autostradă din Franța, proiectul reinterpretează forma arhetipală a arcului istoric, transformând containerele de mărfuri într-un corp monolitic. Finisajele lucioase și ecranele inteligente susțin ideea unui nou tip de arc, a unei porți simbolice spre un viitor optimist.',
             EN: 'The subject of the competition was Transport in 2020. The increase in the number of electric cars, the accelerated automation and the emerging technologies will gradually change the way we travel. Situated on a motorway in France, the project re-interprets the archetypal shape of the historical Arc de Triomphe, transforming the set of shipping containers into a monolithic object. The glossy finishing and the smart screens support the idea of a new type of arch – that of a symbolic gate towards a brighter future.'}
     }
      ]
    },
    {path:'images/projects/N APARTMENT/01_LVG02x-2',
    text:'N Apartament',
    sideDescription: {
      title: 'N Apartament',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Amenajare interioară\nSuprafață: 55 mp\n\nAutor: Zeno Ardelean\nCoautor: Dana Ardelean\nExecuție Mobilier: Slobodan Ilijevic',
              EN: 'Location: Timișoara, România\nCategory: Interior design\nArea 55 sq m\n\nAuthor: Zeno Ardelean\nCoauthor: Dana Ardelean'}
      },
    drawings:8,
    src:[
     {pic:'images/projects/N APARTMENT/01_LVG02x-2'},
     {pic:'images/projects/N APARTMENT/02_N_LOCATION'},
     {pic:'images/projects/N APARTMENT/03_N_APT_TABLE 3'},
     {pic:'images/projects/N APARTMENT/04_N_APT_TABLE1'},
     {pic:'images/projects/N APARTMENT/05_N_APT_TABLE 4'},
     {pic:'images/projects/N APARTMENT/06_N_APT_TABLE 5'},
     {pic:'images/projects/N APARTMENT/07_N_APT_TABLE 6'},
     {pic:'images/projects/N APARTMENT/08_N_APT_TABLE2'},
     {pic:'images/projects/N APARTMENT/09_PLAN'},
     {pic:'images/projects/N APARTMENT/10_SCHEMA1'},
     {pic:'images/projects/N APARTMENT/11_SCHEMA2'},
     {pic:'images/projects/N APARTMENT/12_SCHEMA3'},
     {pic:'images/projects/N APARTMENT/13_SCHEMA4'},
     {pic:'images/projects/N APARTMENT/14_SCHEMA7'},
     {pic:'images/projects/N APARTMENT/15_SCHEMA8'},
     {pic:'images/projects/N APARTMENT/16'},
     {pic:'images/projects/N APARTMENT/17'},
     {pic:'images/projects/N APARTMENT/18'},
     {text : {RO: 'Situat la o mansardă de clădire din țesut istoric, apartamentul avea un spațiu dificil de partiționat și mobilat. Provocarea a fost redistribuirea totală a compartimentării inițiale. Astfel zona de noapte se limitează la latura scurtă a apartamentului, iar zona de zi înșiruie livingul, locul de luat masa și bucătăria de-a lungul laturii vestice. La cel mai abstract nivel, proiectul se reduce la o bandă care înfășoară zona de zi și la un cub care închide zona de noapte. Un'+ 'mare aport asupra proiectului l-a avut mobilierul integrat, custom-made. Dat fiind spațiul dificil, foarte îngust și lung, mobilarea accentuează forma și e neîntreruptă, creând senzația de spațialitate. De asemenea, spațiile de depozitare sunt ascunse fie în pereții exteriori, fie în peretele interior. Niciun element din mobilierul fix nu caută să iasă în evidență, totul devine un fundal pentru canapeaua modulară.'+
' Aceasta, împreună cu măsuța custom-made animă spațiul în diverse situații, devenind pat, canapea, fotolii, în funcție de nevoile de moment ale beneficiarului. Cromatica apartamentului și distribuirea sa caută să pună în evidență exteriorul apartamentului, un cartier istoric de secol XIX care încă își păstrează farmecul.'
,
 EN: 'Situated in the loft of a historical building, the apartment contained a space which was difficult to partition and furnish. The challenge was to fully re-design the initial compartmentation. Therefore, the night area was placed in the short side of the apartment, while the day area included the living-room, the dining-room and the kitchen in the west side. The project can be abstractly reduced to a belt that wraps the living area and a cube which closes up the sleeping'+ 'area. A great contribution to the project was the custom-made, built-in furniture. Given that the space was very narrow and long which made it difficult to handle, the furniture underlines its uninterrupted shape, visually increasing its spatiality. Also, the storage areas are hidden either in the exterior walls or the inner continuous wall. None of the fixed furniture pieces stand out, but they create a background for the modular sofa.'+
'Together with the custom-made coffee table, the colorful sofa animates the space and it can turn into a bed or a set of armchairs to meet the needs of the owner. The colors of the apartment and its simple compartmentation attempt to highlight the exterior of the lodging – a historical district which is trying to preserve the charm of the 19th century.'
}
     }
      ]
    },
    {path:'images/projects/RB House/C2',
    text:'RB House',
    sideDescription: {
      title: 'RB House',
      body : {RO: 'Locație: Giarmata, România\nCategorie: Rezidential\nSuprafață: teren: 400 mp\nSuprafață: construită: 125 mp\n\nAutor: Dana Ardelean, Zeno Ardelean',
              EN: 'Location: Giarmata, România\nCategory: Residential\nLand area: 400 sq m\nBuilt-up area: 125 sq m\n\nAuthor: Dana Ardelean, Zeno Ardelean'}
      },
    drawings:2,
    src:[
     {pic:'images/projects/RB House/C2'},
     {pic:'images/projects/RB House/C1x'},
     {pic:'images/projects/RB House/PLAN PARTER'},
     {pic:'images/projects/RB House/PLAN ETAJ'},
     {pic:'images/projects/RB House/PLAN SITUATIE'},
     {pic:'images/projects/RB House/SCHEME3'},
     {pic:'images/projects/RB House/SCHEME2'},
     {pic:'images/projects/RB House/SCHEME1'},
     {pic:'images/projects/RB House/SCHEME4'},
     {pic:'images/projects/RB House/SCHEME5'},
     {pic:'images/projects/RB House/SCHEME6'},
     {text : {RO: 'Casa RB pornește de la două volume care preiau înalțimea vecinilor. Fiecare volum adăpostește o generație a familiei. Parterul conține un living comun, iar etajul are un hol generos care devine zona de zi privată pentru familia tânără. Fațadele sunt tratate simplu, fiecare cu câte un material. Decupajele formează ferestre pătrate, iar copertinele dinspre curte și de la acces accentuează forma inițială. Pomul existent pe sit este integrat în designul terasei dinspre curte și devine un centru de atenție.',
             EN: 'RB house starts with two structures mirroring the height of the neighboring houses. Each structure houses a generation of a family. The ground floor contains a common living-room, while the upper floor has a generous lobby which represents the private living area for the younger generation. The façades follow a simple design, each one with its own material. The incisions follow the shape of the square windows, while the sunshade overlooking the garden and the access highlight its initial shape. The tree on the site was integrated in the terrace design towards the garden making it a valuable focus point.'}
     }
      ]
    },
    {path:'images/projects/preluari/CASA BALABAN/16',
    text:'BLB House',
    sideDescription: {
      title: 'BLB House',
      body : {RO: 'Locație: Timișoara, România\nCategorie: preluare / refurbished // Amenajare interioară\nSuprafață:: 285 mp\n\nAutor: Dana Ardelean\nCoautor: Zeno Ardelean',
              EN: 'Location: Timișoara, România\nCategory: Refurbished // Interior design\nArea: 285 sq m\n\nAuthor: Dana Ardelean\nCoauthor: Zeno Ardelean'}
      },
    src:[
     {pic:'images/projects/preluari/CASA BALABAN/16'},
     {pic:'images/projects/preluari/CASA BALABAN/09'},
     {pic:'images/projects/preluari/CASA BALABAN/10'},
     {pic:'images/projects/preluari/CASA BALABAN/11'},
     {pic:'images/projects/preluari/CASA BALABAN/12'},
     {pic:'images/projects/preluari/CASA BALABAN/13'},
     {pic:'images/projects/preluari/CASA BALABAN/14'},
     {pic:'images/projects/preluari/CASA BALABAN/15'},
     {pic:'images/projects/preluari/CASA BALABAN/17'},
     {pic:'images/projects/preluari/CASA BALABAN/18'},
     {pic:'images/projects/preluari/CASA BALABAN/19'},
     {text : {RO: 'Locuința a fost preluată în faza „la roșu”. Intervențiile au constat în două etape: refațadizarea + amenajarea exterioară și amenajarea interioară. În primă fază s-au epurat formele, s-au înlocuit balustradele metalice cu balustrade de sticlă și s-a adosat o terasă spre curtea din spate. Fațadele au fost prelucrate și s-a ales folosirea de accente cromatice care să sublinieze volumetria. Interiorul este tratat unitar, zona de zi având aceleași materiale și texturi. Se urmărește obținerea luminii naturale într-o proporție cât mai ridicată, lucru ce conduce la suprafețe albe, lucioase, reflectante.',
             EN: 'We started from a partly finished house. The interventions consisted of two phases: redesigning the façade + exterior and interior design. In the first phase, we cleaned the general shapes, we replaced the metallic handrails with glass handrails, and we adjoined a terrace to the backyard. Then we redesigned the façade using a chromatic rhythm to highlight the structure.'}
     }
      ]
    },
    {path:'images/projects/preluari/CASA TICULA/12',
    text:'TCL House',
    sideDescription: {
      title: 'TCL House',
      body : {RO: 'Locație: Dumbrăvița, jud. Timiș, România\nCategorie: preluare / refurbished // Amenajare interioară\nSuprafață:: 290 mp\n\nAutor: Dana Ardelean, Zeno Ardelean',
              EN: 'Location: Dumbrăvița, jud. Timiș, România\nCategory: Refurbished // Interior design\nArea: 290 sq m\n\nAuthor: Dana Ardelean, Zeno Ardelean'}
      },
    src:[
      {pic:'images/projects/preluari/CASA TICULA/12'},
      {pic:'images/projects/preluari/CASA TICULA/02_T_HOUSE_LOCATION'},
      {pic:'images/projects/preluari/CASA TICULA/03_existent01'},
      {pic:'images/projects/preluari/CASA TICULA/04_existent02'},
      {pic:'images/projects/preluari/CASA TICULA/05_propus01'},
      {pic:'images/projects/preluari/CASA TICULA/06'},
      {pic:'images/projects/preluari/CASA TICULA/07_propus02'},
      {pic:'images/projects/preluari/CASA TICULA/08'},
      {pic:'images/projects/preluari/CASA TICULA/09_propus03'},
      {pic:'images/projects/preluari/CASA TICULA/10'},
      {pic:'images/projects/preluari/CASA TICULA/11'},
      {pic:'images/projects/preluari/CASA TICULA/12'},
      {pic:'images/projects/preluari/CASA TICULA/13'},
      {pic:'images/projects/preluari/CASA TICULA/14'},
      {pic:'images/projects/preluari/CASA TICULA/01'},
     {text : {RO: 'Fațada inițială era foarte diversă și golurile nu se aliniau. Așadar am abordat o metodă prin care să unificăm parterul folosind piatră de culoare închisă. Terasa dinspre dormitor a fost închisă de un grilaj semitransparent pentru a oferi intimitate. Lemnul folosit la exterior se continuă și în încăperi, combinându-se cu pereții și mobilierul alb. Micile obiecte de iluminat și de decor ale beneficiarului completează fundalul preponderent alb. Patru stâlpi de rezistență din interiorul livingului au fost înglobați în mobilier și au fost mascați pentru a li se diminua prezența.',
             EN: 'The initial façade was very diverse and the gaps did not follow the same line. We considered an approach to unite the ground floor by using dark-colored stone. For more intimacy, the terrace outside the bedroom was concealed with the help of a translucid metal mesh. The wood used outside continues inside as well, merging with the white walls and furniture. The small lighting elements and the personal decorative objects fill the predominantly white background. The four structural columns inside the living-room were incorporated in the furniture and overall concealed.'}
     }
      ]
    },
    {path:'images/projects/preluari/MAGAZIN DUMBRAVITA/01',
    text:'DB Shop Facade',
    sideDescription: {
      title: 'DB Shop Facade',
      body : {RO: 'Locație: Dumbrăvița, jud. Timiș, România\nCategorie: preluare / refurbished\n\nAutor: Dana Ardelean',
              EN: 'Location: Dumbrăvița, jud. Timiș, România\nCategory: Refurbished\n\nAuthor: Dana Ardelean'}
      },
    src:[
     {pic:'images/projects/preluari/MAGAZIN DUMBRAVITA/01'},
     {pic:'images/projects/preluari/MAGAZIN DUMBRAVITA/02_M_DUMBRAVITA_LOCATION'},
     {pic:'images/projects/preluari/MAGAZIN DUMBRAVITA/03'},
     {pic:'images/projects/preluari/MAGAZIN DUMBRAVITA/04alimentara_EXISTENT'},
     {pic:'images/projects/preluari/MAGAZIN DUMBRAVITA/05alimentara_PROPUS'},
     {text : {RO: 'Fațada clădirii construite înainte de \'89 a fost recondiționată și estetizată prin mijloace minimale, folosind vopsea și lemn. Liniile haotice ale fațadei au fost separate în registre orizontale, fațada a fost „cumințită”, iar textele împrăștiate îi dau personalitate.',
             EN: 'The façade of the 80s building was redone and designed with minimum intervention, using paint and wood. The chaotic lines of the façade were separated in horizontal belts, the façade was therefore tamed, while the scattered texts provide a certain personality.'}
     }
    ]
    },
    {path:'images/projects/Burgerhouse/cover01',
    text:'Burgerhouse',
    sideDescription: {
      title: 'Burgerhouse',
      body : {RO: 'Locație: Timișoara, România\nCategorie: Amenajare interioară\nSuprafață: 45 mp\n\nAutor: Dana Ardelean, Zeno Ardelean',
              EN: 'Location: Timișoara, România\nCategory: Interior design\nArea: 45 sq m\n\nAuthor: Dana Ardelean, Zeno Ardelean'}
      },
    src:[
{pic:'images/projects/Burgerhouse/cover01'},
{pic:'images/projects/Burgerhouse/location'},
{pic:'images/projects/Burgerhouse/02'},
{pic:'images/projects/Burgerhouse/03'},
{pic:'images/projects/Burgerhouse/04'}
      ]
    },
    {path:'images/projects/preluari/ACCES BRUNCH/cover',
    text:'BRUNCH Access',
    sideDescription: {
      title: 'BRUNCH Access',
      body : {RO: 'Locație: Timișoara, România\nCategorie: preluare / refurbished\n\nAutor: Dana Ardelean\nCoautor: Zeno Ardelean',
              EN: 'Location: Timișoara, România\nCategory: Refurbished\n\nAuthor: Dana Ardelean\nCoauthor: Zeno Ardelean'}
      },
    drawings:3,
    src:[
     {pic:'images/projects/preluari/ACCES BRUNCH/00'},
     {pic:'images/projects/preluari/ACCES BRUNCH/01_BRUNCH_LOCATION'},
     {pic:'images/projects/preluari/ACCES BRUNCH/02_existent'},
     {pic:'images/projects/preluari/ACCES BRUNCH/03_schema1'},
     {pic:'images/projects/preluari/ACCES BRUNCH/04'},
     {pic:'images/projects/preluari/ACCES BRUNCH/05realizat'},
     {pic:'images/projects/preluari/ACCES BRUNCH/06'},
     {text : {RO: 'Accesul în Brunch a fost tratat ca o primă intervenție pe fațada clădirii. Se propune redefinirea parterului întregii fațade prin folosirea unei geometrii unitare. Cutia contorsionată preia liniile de pe fațadă și le reinterpretează. Golul se aliniază cu solbancul ferestrei de deasupra și forma de pâlnie invită trecătorii spre acces.',
             EN: 'Designing the access to Brunch mini-restaurant became a first intervention on the façade of the building. We proposed a redefinition of the ground floor for the entire building by using a unitary geometry. The twisted box takes over the lines on the façade and re-interprets them. The excavated door is in perfect line with the window sill above, while the rectangular funnel shape invites the passers-by inside.'}
     }
      ]
    }
////here starts renderings/////
    ];

  constructor() { }
}
