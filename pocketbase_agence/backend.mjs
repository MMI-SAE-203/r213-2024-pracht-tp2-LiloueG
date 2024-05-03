//*Liloue GUYOT MMI1 A1

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

//*Exercice 5
try {
    const fullList = await pb.collection('maison').getFullList();
    console.log(JSON.stringify(fullList, null, 2));
}catch (e) {
  console.error(e);
}


//*Exercice 6
try {
    const uneMaison = await pb.collection('maison').getOne('sxcznhjss9adcwv');
    console.log(JSON.stringify(uneMaison, null, 2));
}catch (e) {
  console.error(e);
}


//*Exercice 7
try {
    const fullList = await pb.collection('maison').getFullList({sort : 'created'});
    console.log(JSON.stringify(fullList));
}catch (e) {
  console.error(e);
}


//*Exercice 8
try {
    const fullList = await pb.collection('maison').getFullList({sort : '-created'});
    console.log(JSON.stringify(fullList));
}catch (e) {
  console.error(e);
}


//*Exercice 9
try {
    const maisonfav = await pb.collection('maison').getFullList({filter : 'favori=true'});
    console.log('maisonfav');
}catch (e) {
  console.error(e);
}


//*Exercice 10
try {
    const superficie = await pb.collection('maison').getFullList({filter : 'surface >= 100'});
    console.log(superficie);
}catch (e) {
    console.error(e);
  }


//*Exercice 11
try {
    const surfaceetsdb = await pb.collection('maison').getFullList({filter : 'surface >= 100'&& 'nb_sdb>=2'});
    console.log(surfaceetsdb);
}catch (e) {
    console.error(e);
  }


//*Exercice 12
try {
    const surfaceetsdb = await pb.collection('maison').getFullList({filter : 'surface >= 100' && 'nb_chambres>=3'});
    console.log(surfaceetsdb);
}catch (e) {
    console.error(e);
  }


//*Exercice 13
try {
    const surfaceetchb = await pb.collection('maison').getFullList({filter : 'surface >= 100'}, {sort : 'prix'});
    console.log(surfaceetchb);
}catch (e) {
    console.error(e);
  }


//*Exercice 14
try {
    const nomasc = await pb.collection('maison').getFullList({sort : 'nom_maison'});
    console.log(nomasc);
}catch (e) {
    console.error(e);
  }


//*Exercice 15
try {
    const nom = await pb.collection('maison').getFullList({filter : 'nom_maison = "Aldo"'});
    console.log(nom);
}catch (e) {
    console.error(e);
  }


//*Exercice 16
try {
    const toutmaison = await pb.collection('maison').getFullList({filter : 'nom_maison != "Aldo"'}, {sort : 'nom_maison'});
    console.log(toutmaison);
}catch (e) {
    console.error(e);
  }
