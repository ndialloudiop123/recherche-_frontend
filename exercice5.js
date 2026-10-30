// Donnees
const etudiant1={
    id:104,
    prenom:"Aminata",
    nom:"Fall",
    notes:[13,16,12],
    filiere:"IAGE",
};

// extraire l'identite avec destructuring
function extraireIdentite(etudiant){
 const {prenom,nom,filiere} =etudiant;
 return {prenom:prenom,nom:nom,filiere:filiere} ;

}
console.log("1.identite extraite:",extraireIdentite(etudiant1));
// la moyenne des notes
function calculerMoyenneNotes(notes){
    if (!notes || notes.length ==0)
        return 0;
    const som = notes.reduce((acc,note) =>acc + note ,0);
    return Number(som / notes.length);
}

// ajouter une note sans modification
function ajouterNote(etudiant,nouvelleNote){
    return{
        ...etudiant,
        notes: [...etudiant.notes,nouvelleNote]

    };
}
// creer un reume 
function creerResum(etudiant,...options){
    const identite = extraireIdentite(etudiant);
    const moyenne= calculerMoyenneNotes(etudiant.notes);
    return {
        ... identite,
        moyenne,
        options
    };
};

//Questions de copmprehension
//  1. 
//la fonction return donne le resultat au reste du programme alors que console.log
//on a pu a reutiliser le resultat.

//  2.
// on constate que pour destructuring on a des accolates 
// alors que pour un tableau on a des crochets

//3.
// on constate que spread prend un tableau alors que rest prend plusieurs tableau
 //et les regroupe dans un tableau


//4.
// on constate avec spread on cree une copie avant de modifier et aussi ca va securiser le code


//5.

//node exercice5.js
// si on fusionne deux objets c'est la derniere valeur qui l'emporte





