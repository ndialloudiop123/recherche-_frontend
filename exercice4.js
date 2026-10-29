// fonction additionner
function additionner(...nombres){
    return nombres.reduce(function(acc,curr){
        return acc + curr;
    },0);
};
console.log("1.som(2 val):",additionner(5,10));
console.log("2.som(3 val):",additionner(5,10,12));
console.log("3.som(5 val):",additionner(5,10,12,15,14,17));

// afficher premier autres
function afficherpremieretautres(premier,...autres){
    console.log("2.premier argument:",premier);
    console.log("3.autres argument:",autres);

};

 afficherpremieretautres('Awa','Moussa','Fatou','Ibra');

 // fonction creerFiche(nom,filiere,...competences)
 function
 creerFiche(nom,filiere,...competences){
    return{
        nom:nom,
        filiere:filiere,
        competences:competences,


    };
 };
 console.log("3.fiche creee:",creerFiche('Awa','IAGE','javascript','HTML','CSS'));
 