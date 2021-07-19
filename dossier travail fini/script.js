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

    update_questions();
}

function Function_valider1() {
    if (questions[numero_question].reponse_1 == questions[numero_question].reponse) {
        alert("Bravo, tu as trouvé !!!");
        if (numero_question + 1 == questions.length) {
            Function_fin_du_jeu();
        } else {
            numero_question++;
            update_questions();
        }
    } else {
        alert("Tu t'es trompé, réessaye encore une fois");
    }
}

function Function_valider2() {
    if (questions[numero_question].reponse_2 == questions[numero_question].reponse) {
        alert("Bravo, tu as trouvé !!!");
        if (numero_question + 1 == questions.length) {
            Function_fin_du_jeu();
        } else {
            numero_question++;
            update_questions();
        }
    } else {
        alert("Tu t'es trompé, réessaye encore une fois");
    }
}

function Function_valider3() {
    if (questions[numero_question].reponse_3 == questions[numero_question].reponse) {
        alert("Bravo, tu as trouvé !!!");
        if (numero_question + 1 == questions.length) {
            Function_fin_du_jeu();
        } else {
            numero_question++;
            update_questions();
        }
    } else {
        alert("Tu t'es trompé, réessaye encore une fois");
    }
}

function Function_valider4() {
    if (questions[numero_question].reponse_4 == questions[numero_question].reponse) {
        alert("Bravo, tu as trouvé !!!");
        if (numero_question + 1 == questions.length) {
            Function_fin_du_jeu();
        } else {
            numero_question++;
            update_questions();
        }
    } else {
        alert("Tu t'es trompé, réessaye encore une fois");
    }
}

function update_questions() {
    document.getElementById('afficher_image').src = questions[numero_question].image;
    document.getElementById('afficher_question').innerText = questions[numero_question].question;
    document.getElementById('numero_page').innerText = (numero_question + 1) + '/' + questions.length;

    document.getElementById('ma_reponse1').innerText = questions[numero_question].reponse_1
    document.getElementById('ma_reponse2').innerText = questions[numero_question].reponse_2
    document.getElementById('ma_reponse3').innerText = questions[numero_question].reponse_3
    document.getElementById('ma_reponse4').innerText = questions[numero_question].reponse_4
}

function Function_fin_du_jeu() {
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "block";

    document.getElementById('affichage_temp').innerText = chronometre_minutes + "," + chronometre_seconde + " minutes";
    document.getElementById('affichage_question').innerText = questions.length;
}