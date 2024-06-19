/** Ex01.
 * Calcularea Sumelor:
 * Definește o funcție numită computeSum care 
 * primește doi parametri și returnează suma acestora.
 */


function computeSum(a, b) {
    return a + b;
}

console.log(computeSum(4, 6));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex02.
 * Determinarea Parității:
 * Scrie o funcție numită isEven care primește un număr 
 * și returnează true dacă numărul este par și false dacă este impar
 */


console.log('Variant 1');
function isEven(n){
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(6))

console.log('Variant 2');
function isEven2(n) {
    return n % 2 == 0;
}

console.log(isEven(7));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');


/** Ex03.
 * Concatenarea Șirurilor:
 * Creează o funcție numită concatenateStrings care primește 
 * două șiruri și le concatenează, returnând rezultatul.
 */

function concatenateStrings(str1, str2) {
    return str1 + ' ' + str2;
}

console.log(concatenateStrings('natura', 'vie'));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex04.
 * Verificarea Palindromului:
 * Defineste o funcție numită isPalindrome care primește un șir și
 *  returnează true dacă este palindrom și false în caz contrar.
 */

function isPalindrome(str) {
    str = str.toLowerCase().split(" ").join("")
    let strReversed = str.split("").reverse().join("");
    return str == strReversed;
}

console.log(isPalindrome ('apa'));
console.log(isPalindrome ('veverita'));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex05.
 * Generarea unui Număr Aleatoriu:
 * Scrie o funcție numită generateRandomNumber care 
 * returnează un număr aleatoriu întreg între 1 și 100.
 */

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log(generateRandomNumber());

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex06.
 * Calcularea Puterii:
 * Implementează o funcție numită raiseToPower care primește 
 * două numere (baza și exponentul) și returnează rezultatul ridicării la putere.
 */

console.log('Variant 1');
function raiseToPower(n, m) {
    return Math.pow(n, m);
}

console.log(raiseToPower(3, 4));

console.log('Variant 2');
function raiseToPowera(n, m) {
    let result = 1;
    for (let index = 1; index <= m; index++) {
        result = result * n;
    }
    return result;
}

console.log(raiseToPowera(2, 3))

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex07.
 * Calcularea Mediei:
 * Creează o funcție numită calculateAverage care primește 
 * un array de numere și returnează media lor.
 */

console.log('Variant 1');
function calculateAverage(array) {
    let sum = 0;
    for(let elem of array) {
        sum += elem;
    }
    return sum/array.length;
}

console.log(calculateAverage([15, 17, 12, 24]));

console.log('Variant 2');

function average(numb) {
    const sum = numb.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum/numb.length;
}

console.log(average([13, 23, 18]));


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex08.
 * Transformarea în Majusculă:
 * Definește o funcție numită transformToUppercase 
 * care primește un șir și returnează șirul cu toate 
 * literele transformate în majusculă.
 */

function transformToUppercase(sir) {
    return sir.toUpperCase();
}

console.log(transformToUppercase('piropoPicarnita'));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');

/** Ex09.
 * Verificarea Numărului Prim:
 * Scrie o funcție numită isPrimeNumber care primește un număr 
 * și returnează true dacă este prim și false în caz contrar.
 */

function isPrimeNumber(nr) {
    let prim = true;
    for (let i = 2; i <= nr/2; i++) {
    if (nr % i == 0) {
        prim = false;
    }
 } return prim; 
}

console.log(isPrimeNumber(19));
console.log(isPrimeNumber(20));


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('\n');
console.log('\n');