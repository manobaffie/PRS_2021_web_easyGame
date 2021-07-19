document.getElementById('nom_du_fichier').addEventListener('change', readSingleFile, false);
function readSingleFile(e) {
    var file = e.target.files[0];
    console.log(file);
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        questions = JSON.parse(e.target.result);
    };
    reader.readAsText(file);
}

var questions;
var numero_question = 0;
var chronometre_seconde = 0;
var chronometre_minutes = 0;

setInterval(function() {
    document.getElementById('afficher_chronometre').innerText = chronometre_minutes + "," + chronometre_seconde;

    chronometre_seconde += 1;
    if (chronometre_seconde == 60) {
        chronometre_minutes++;
        chronometre_seconde = 0;
    }

}, 1000);

function Function_Commencer_Le_Jeu() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";

    chronometre_seconde = 0;
    chronometre_minutes = 0;

    document.getElementById('afficher_image').src = questions[numero_question].image;
    document.getElementById('afficher_question').innerText = questions[numero_question].question;
    document.getElementById('numero_page').innerText = (numero_question + 1) + '/' + questions.length;
}

function Function_valider() {
    if (document.getElementById('ma_reponse').value == questions[numero_question].reponse) {
        alert("Bravo, tu as trouvé !!!");
        if (numero_question + 1 == questions.length) {
            Function_fin_du_jeu();
        } else {                            
            numero_question++;
            document.getElementById('afficher_image').src = questions[numero_question].image;
            document.getElementById('afficher_question').innerText = questions[numero_question].question;
            document.getElementById('numero_page').innerText = (numero_question + 1) + '/' + questions.length;
        }
    } else {
        alert("Tu t'es trompé, réessaye encore une fois");
    }
}

function Function_fin_du_jeu() {
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "block";

    document.getElementById('affichage_temp').innerText = chronometre_minutes + "," + chronometre_seconde + " minutes";
    document.getElementById('affichage_question').innerText = questions.length;
}