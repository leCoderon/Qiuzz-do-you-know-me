const form = document.querySelector('.monFormulaire');
let tableauResultats = [];
const reponses = ['b', 'c', 'c', 'b', 'c'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.resultats .note');
const aideResultat = document.querySelector('.resultats .aide');
const toutesLesQuestions = document.querySelectorAll('.blocQuestion');
let tableauVerification = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (let i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    // console.log(tableauResultats);
    functionVerfication(tableauResultats);
    tableauResultats = [];
});


const functionVerfication = (tableauResult) => {

    for (let i = 0; i < 5; i++) {

        if (tableauResult[i] === reponses[i]) {
            tableauVerification.push(true);
        }
        else {
            tableauVerification.push(false);

        }
    }

    // console.log(taleauVerification);
    functionCouleur(tableauVerification);
    functionAffichageMessage(tableauVerification);
    tableauVerification = [];
}

const functionAffichageMessage = (tableauVerif) => {
    const nombreDeFautes = tableauVerif.filter(element => element !== true).length;
    console.log(nombreDeFautes);


    switch (nombreDeFautes) {
        case 0:
            titreResultat.innerHTML = "😀 This is a true friend😀";
            noteResultat.innerHTML = '5/5';
            form.style.display = 'none';
            break;
        case 1:
            titreResultat.innerHTML = "Waouh that's nice buddy😀";
            noteResultat.innerHTML = '4/5';
            break;
        case 2:
            titreResultat.innerHTML = "Starting knowing a little more 😀!";
            noteResultat.innerHTML = '3/5';
            break;
        case 3:
            titreResultat.innerHTML = "You know me a bite😀";
            noteResultat.innerHTML = '2/5';
            break;
        case 4:
            titreResultat.innerHTML = "You don't know me!😀";
            noteResultat.innerHTML = '1/5';
            break;
        case 5:
            titreResultat.innerHTML = "You really don't know me!😀";
            noteResultat.innerHTML = '0/5';
            break;


    }
}

const functionCouleur = (tableauVerif) => {

    for (let i = 0; i < tableauVerif.length; i++){

        if(tableauVerif[i] == true){
            toutesLesQuestions[i].style.backgroundColor = 'lightgreen';
        }
        else{
            toutesLesQuestions[i].style.backgroundColor = '#ffb8b8';
            toutesLesQuestions[i].classList.add('echeck');

            setTimeout(() =>{
                toutesLesQuestions[i].classList.remove('echeck');
 
            }, 500);

        }
    }
}

for(let item of toutesLesQuestions){
    // console.log(item);
    item.addEventListener('click', () =>{
        item.style.backgroundColor = '#fff';
 
    })
}


