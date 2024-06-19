/**
 * 1.Schimbarea Textului:
 * Selectează un element din DOM și schimbă conținutul textului acestuia.
 */

const element = document.getElementById('exercise-1');
console.log('element: ', element);

element.innerHTML = '<p> My changed text!';

/**
 * 2.Modificarea Stilurilor:
 * Schimbă culoarea de fundal a unui element și mărimea fontului folosind doar cod 
 * JavaScript.
 */

const backFont = document.getElementById('exercise-2');
backFont.style.backgroundColor = 'red';
backFont.style.fontSize = '20px';

/**
 * 3.Adăugarea de Elemente:
 * Creează un element nou (de exemplu, un paragraf sau o imagine) și adaugă-l 
 * într-un container existent.
 */

const exThree = document.getElementById ('exercise-3');
let newThree = document.createElement ('div');
newThree.innerHTML = `<img src="https://www.gardeners.com/globalassets/articles/gardening/2023content/8078-chive-flowers-edible.jpg">`;
exThree.appendChild(newThree);

/**
 * 4.Ștergerea Elementelor:
 * Identifică un element și șterge-l din DOM.
 */

const del = document.getElementById('to-delete');
del.remove();

/**
 * 5.Manipularea Listelor:
 * Adaugă un nou element la o listă existentă.
 */

const list = document.querySelector('#exercise-5 > ul');
let newElemList = document.createElement('li');
newElemList.textContent = 'Item 4 - NEW!';
list.appendChild(newElemList);

/**
 * 6.Evenimente și Alerte:
 * Atașează un event listener la un buton și afișează un mesaj 
 * de alertă atunci când butonul este apăsat.
 */

const f_alert = () => {
    alert('Alertaaaaa!');
}

const ev = document.getElementById('show-alert');
ev.addEventListener('click', f_alert);

/**
 * 7.Modificarea Atributelor:
 * Modifică valoarea atributului src al unei imagini sau href al unui link.
 */

const atr =document.querySelector('#exercise-7 > a');
atr.setAttribute('href', 'https://google.com');


/**
 * 8.Toggle Ascundere/Afișare:
 * Atașează un event listener la un buton pentru a alterna între
 *  ascunderea și afișarea unui element.
 */

const hide = () => {
    const toggle = document.getElementById('message');
    // console.log('toggle: ', toggle);

    if (toggle.classList.contains('hide')) {
        toggle.classList.remove('hide');
        // console.log('Remove');
    } else {
        toggle.classList.add('hide');
        // console.log('Add!');
    }
}

const button = document.querySelector('#exercise-8 > button');
button.addEventListener('click', hide);


/**
 * 9.Validare Formular:
 * Creează un formular simplu și atașează un event listener 
 * pentru a valida câmpurile când formularul este trimis.
 */

const valid = () => {

    const validPass = document.getElementById('password');
    const validConfirmPass = document.getElementById('confirm-pass');

    // console.log('validPass: ', validPass.value);
    // console.log('validConfirmPass: ', validConfirmPass.value);

    if(validPass.value == validConfirmPass.value) {
        alert('All good!!!');
    } else {
        alert('Try again!!');
    }
}

const valButton = document.querySelector('#exercise-9 > form > button');
console.log('valButton: ', valButton);
valButton.addEventListener('click', valid);

/**
 * 10.Crearea unei Galerii Foto:
 * Folosind un array de URL-uri ale imaginilor, creează o galerie 
 * foto în DOM, cu funcționalități de a naviga între imagini.
 */



