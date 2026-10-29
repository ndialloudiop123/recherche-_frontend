 // exercice3


 //Donneees
 const groupeA=['Awa','Moussa','Fatou'];
 const groupeB=['Ibra','Marieme'];
 const etuBase={nom:'DIOP',filiere:'IAGE',niveau:'L2'};
 
 // tout les etudiants
 const toutlesetudiants=[...groupeA,...groupeB];
 console.log("1.tout les etudiants:",toutlesetudiants);

 // copie groupeA puis ajouter cheikh

 const copiegroupeA=[...groupeA,'cheikh'];
 console.log("2.copie groupeAavec cheikh:",copiegroupeA);
 console.log("groupeA normal:",groupeA);

 // etudiant complet a partir des etudiantbase

 const etudiantcomplet={...etuBase,'age':22,ville:'Dakar'};
 console.log("3.etudiant complet:",etudiantcomplet);

 // etudiant base en remplacant le niveau par L3
 const etudiantmodifie={...etuBase,niveau:'L3'};
 console.log("4.etudiant mpodifie(L3):",etudiantmodifie);
 console.log("etudiant original(conserve(L2):",etuBase);

 // fusionner
 const coordonnees = {ville:'Dakar',pays:'senegal',email:'coord@univ.sn'};
 const contact ={telephone:'771234567',email:'coord@univ.sn'};
 const profil ={...coordonnees,...contact};
 console.log("5.profil fusionne:",profil);

