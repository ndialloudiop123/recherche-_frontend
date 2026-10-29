                          //  exercice1
// moyenne
const moyenne  = (n1 ,n2 , n3) => {
    return (n1 + n2 + n3 )/ 3;
};
console.log ("moy (10 ,14 , 15) :", moyenne (10 ,14 , 15)); //13
console.log ("moy cas limite (10 ,10 , 10) :", moyenne (8 ,8 , 14)); //10

//moy >=10
const estadmis = (moy) =>
{
    return moy>=10;
};
console.log("estadmis(12):",estadmis(12));
console.log("estadmis limite(9.5):",estadmis(9.5)); // false


// prix ttc
const prixttc = (prixHT,tauxTVA =0.18) =>
{
    return prixHT * (1+tauxTVA);
};
console.log("prix ttc (1000 HT):",prixttc(10000)); // 11800
console.log("prix ttc limite (0 HT):",prixttc(0)); // 0


// convertion
const convmin = (heure) =>
{
    return heure *60;
};

console.log("converti 2heures en minutes", convmin(2));// 120
console.log("converti  limite 0 heures en minutes", convmin(0));// 0

  