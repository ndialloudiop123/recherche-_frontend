// Données de base
const etudiant1 = {
    id: 104,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
};

// 1. Extraire l'identité avec destructuring
function extraireIdentite(etudiant) {
    const { prenom, nom, filiere } = etudiant;
    return { prenom: prenom, nom: nom, filiere: filiere };
}

console.log("1. Identité extraite :", extraireIdentite(etudiant1));
// 2. Calculer la moyenne des notes
function calculerMoyenneNotes(notes) {
    if (!notes || notes.length === 0) return 0;
    const somme = notes.reduce((acc, note) => acc + note, 0);
    return Number(somme / notes.length); 
}
// 3. Ajouter une note sans modifier l'objet ni le tableau d'origine (Immutabilité)
function ajouterNote(etudiant, nouvelleNote) {
    return {
        ...etudiant,
        notes: [...etudiant.notes, nouvelleNote]
    };
}
//4. Créer un résumé avec l'identité, la moyenne et les options (...rest)
function creerResume(etudiant, ...options) {
    const identite = extraireIdentite(etudiant);
    const moyenne = calculerMoyenneNotes(etudiant.notes);
    
    return {
        ...identite,
        moyenne,
        options // Tableau des options reçues
    };
}




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





