// exercice2
const etudiant={
    id:2026,
    nom:"NDIAYE",
    prenom:"Moussa",
    filiere:"IAGE",
    niveau:"L2",
    ville:"Dakar"
};
const res=[15,11,17,13,16];
const {nom,prenom,filiere}=etudiant;
console.log("1.nom,prenom,filiere",nom,prenom,filiere);
// renommage
const{niveau:classe}=etudiant;
console.log("2.Niveau renommer en classe:",classe);

// recuperer
const [premierNote,deuxiemeNote,,,derniereNote]=res;
console.log("3.premiere note:",premierNote,"deuxieme note",deuxiemeNote,"derniere note",derniereNote);

// extraire

const [n1,,n3]=res;
console.log("4.premiere note",n1,"troisieme note",n3);

// valeur
const {email="etudiant@unchk.edu.sn"}= etudiant;
console.log("5.email avec valeur par defaut:",email);
//phrase de presentation

const phrase = `je m'appelle ${prenom}${nom},je suis inscrit en filiere ${filiere} en classe de ${classe}`;
console.log("6.la phrase de presentation:", phrase);
console.log(etudiant);
console.log(res);

