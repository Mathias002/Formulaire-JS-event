
// traitement / comparison entre deux input ici email et confirmation email
document.getElementById("email2").addEventListener("input", function(){ // addEventListener("change" pour bouton radio etc
    var paragrapheErreur =  document.getElementById("erreur");
    if (this.value != document.getElementById("email").value) {
        paragrapheErreur.innerHTML = "Les deux adresses email ne correspondent pas"
    }else{
        paragrapheErreur.innerHTML = "";
    }
   
});


document.forms["inscription"].addEventListener("submit", function(e){
    
    var erreur;

    var inputs = this ; // -----> this contient tous les inputs 

    // traitement cas par cas input unique
    if (inputs["email"].value != "test@test.test") {
        erreur = "Adresse email incorrecte";
    }
    
    //traitement générique 
    for (var i = 0; i < inputs.length; i++)
    {
        if (!inputs[i].value){
            erreur = "Veuillez renseigner tous les champs";
            break;
        }
    }

    if (erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false
    }else{
        alert('Formulaire envoyé') ;
    }


});