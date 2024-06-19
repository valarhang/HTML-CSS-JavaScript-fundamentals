/** Ex01.
* Numere Pare și Impare: 
* Scrie un program care afișează toate numerele pare de la 1 la 20
* și toate numerele impare de la 1 la 20.
*/


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');

console.log("Numere pare de la 1 la 20:");
for (let par = 0; par <= 20; par++) {
    if (par % 2 === 0) {
        console.log(par)
    }
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');

console.log("Numere impare de la 1 la 20:");
for (let impar = 0; impar <= 20; impar++) {
    if (impar %2 !== 0) {
        console.log(impar)
    }
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex02.
* Verificare Număr Prim: 
* Scrie un program care verifică dacă un numar este prim.
*/

let vRiabila = 11;
let estePrim = true;
for (let i = 2; i <= vRiabila/2; i++) {
    if (vRiabila % i == 0) {
        estePrim = false;
    }
}
console.log('Este prim: ', estePrim);


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');


/** Ex03.
* Suma Multiplilor de 3 și 5: 
* Calculează suma tuturor numerelor întregi 
* până la 100 care sunt multipli de 3 sau 5.
*/

let sum = 0;
for (let index = 0; index <= 100; index++) {
    if(index % 3 == 0 || index % 5 == 0) {
        sum += index;
    }
}
console.log('Suma multiplilor de 3 si 5 este: ', sum);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex04.
* Afișarea Elementelor Șirului: 
* Creează un șir cu câteva cuvinte și folosește o buclă 
* 'for' pentru a afișa fiecare cuvânt în consolă.
*/

let sir = ['caine', 'masa', 'casa', 'masina', 'scaun']
for (let element of sir) {
    console.log(element);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');


/** Ex05.
* Verificare Palindrom: 
* Scrie un program care verifică dacă un cuvant
* este un palindrom (se citește la fel de la stânga la 
* dreapta și de la dreapta la stânga, ignorând spațiile și diferențele de majuscule)
*/

let str = "abc CbA";

str = str.toLowerCase();
str = str.split(" ").join("")

let str1 = str.split("").reverse().join("");

console.log(str);
console.log(str1);

console.log(str == str1);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex06.
 * Calculează suma pătratelor numerelor de la 1 la 10.
 */

let sumP = 0;
for ( let p = 1; p <= 10; p++) {
    sumP += p * p;
}
console.log(sumP)


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex07.
 * Determinarea Parității: 
 * Se da un array const nums = [1, 12, 30, 21]
 * Scrie un program care afișează un mesaj 
 * care indică pentru fiecare numar din array dacă numărul este par sau impar.
 */

const nums = [1, 12, 30, 21];
for (let ele of nums) {
    if (ele % 2 == 0) {
        console.log(ele, ':par ');

    } else console.log(ele, ':impar ');
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex08.
 * Numere Prime în Interval: 
 * Se dau două numere x = 12, y = 35, afișează toate numerele prime din intervalul x, y.
 */

let x = 12;
let y = 35;

for (let ix = x; ix<= y; ix++) {

    estePrim = true;
    for (let divizor = 2; divizor <= vRiabila/2; divizor++) {
        if (ix % divizor == 0) {
            estePrim = false;
        }
    }

    if (estePrim){
    console.log(ix, 'Este prim: ', estePrim);
    }
}


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');


/** Ex09.
 * Afișarea Tabelului de Multiplicare: 
 * Afiseaza tabelul de multiplicare de la 1 la 10 (tabla inmultirii).
 */

for (let i = 1; i <= 10; i++){
    for (let j=1; j<=10; j++) {
        console.log(i, "x", j, "=", i*j);
    }
    console.log('\n');
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex10.
 * Jocul de FizzBuzz:
 * Scrie un program care afișează numerele de la 1 la 50. 
 * Pentru fiecare multiplu de 3, afișează "Fizz". 
 * Pentru fiecare multiplu de 5, afișează "Buzz". 
 * Pentru numerele care sunt simultan multipli de 3 și 5, afișează "FizzBuzz".
 */

for (let i=1; i<=50; i++) {
    if (i%3 == 0 && i%5 ==00) {
        console.log(i, "FizzBuzz");
    } else if (i%3 == 0) {
        console.log(i, 'Fizz');
    } else if (i%5 == 0) {
        console.log(i, 'Buzz')
    } else {
        console.log(i);
    }
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');
