

console.log(`ex1. Create two arrays: fruits = ['apple', 'orange'] and vegetables = ['carrot', 'broccoli']. Concatenate them into a single array called foods.`)

let fruits = ['apple', 'orange'];
let vegetables = ['carrot', 'broccoli'];
let foods = fruits.concat(vegetables);

console.log('fruits: ', fruits);
console.log('vegetables: ', vegetables);
console.log('foods: ', foods)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('\n')



console.log(`ex2. Create an array of words: fruits = ['apple', 'orange', 'banana'] check if 'grapes' is found in array (indexOf).`)

let fruits1 = ['apple', 'orange', 'banana'];
let index = fruits1.indexOf('grapes');
console.log('Are there grapes: ', index);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('\n')



console.log(`ex3. Creates a Date object and displays the current year in the console.`)

let currentDate = new Date();
console.log('Current year: ', currentDate.getFullYear());

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('\n')



console.log(`ex4. Creates a Date object and adds 5 days to the current date. Display the new date in the console.`)

let currentDay = currentDate.getDate();
console.log('+5 days: ', currentDay + 5);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('\n')



console.log(`ex.5 Create two Data objects representing two moments in time (timestamp). Calculates the difference between them in milliseconds and displays the result in the console.`)

let timestamp1 = new Date('2030-6-12');
let timestamp2 = currentDate.getDay();
console.log('The difference is: ', timestamp1 - timestamp2);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('\n')



console.log(`ex.6 Create an object with information about yourself: person = { name: 'Your Name', age: 25, city: 'Your City' }. Display it in the console;`)

let myPersona = {
    name: 'Valentin Arhanghel',
    age: 37,
    city:  'Coond'
};

console.log('My persona is: ', myPersona);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('\n')



console.log(`ex.7 Change the age of the person in the previously created object. Displays the modified object in the console.`)

myPersona.age = 33;
console.log('My persona is: ', myPersona);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('\n')



console.log(`ex.7 Create an array of objects, each representing a book: books = [{ title: 'Book1', author: 'Author1', yearPublished: 2000 }, { title: 'Book2', author: 'Author2', yearPublished: 1995 }] . Use an array method to add another object representing a book.`)

let books = [{ 
    title: 'Book1',
    author: 'Author1',
    yearPublished: 2000 
}, {
    title: 'Book2',
    author: 'Author2',
    yearPublished: 1995
}]
console.log('Books: ', books);

books.push({ 
    title: 'Book3',
    author: 'Author3',
    yearPublished: 2010 
})
books.unshift({ 
    title: 'Book4',
    author: 'Author4',
    yearPublished: 2015 
})
console.log('Books: ', books);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('\n')
