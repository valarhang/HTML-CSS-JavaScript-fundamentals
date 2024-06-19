/**
 * Obțineți lista de utilizatori de pe JSONPlaceholder și afișați lista în consola;
 */

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        console.log('response: ', response);
        if (!response.ok) {
            throw new Error(`Status ${response.status}`);
        }
        const data = await response.json();
        console.log('data: ', data);
    } catch (err) {
        console.log('err: ', err);
    }
    
}

getUsers();



/**
 * Obțineți detaliile unui utilizator 
 * specific (ex: user cu id 1) si afisati-le in consola;
 */

async function getUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log('response: ', response);
        if (!response.ok) {
            throw new Error(`Status ${response.status}`);
        }
        const data = await response.json();
        console.log('data: ', data);
    } catch (err) {
        console.log('err: ', err);
    }
    
}

getUserById(1);



/**
 * Obțineți lista de postări de pe JSONPlaceholder și afisati-o în consola;
 */

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        console.log('response: ', response);
        if (!response.ok) {
            throw new Error(`Status ${response.status}`);
        }
        const data = await response.json();
        console.log('data: ', data);
    } catch (err) {
        console.log('err: ', err);
    }
    
}

getPosts();



/**
 * Obțineți detaliile unei postări 
 * specifice (ex: postarea cu id 2) și afisati-o în consola;
 */

async function getPostById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log('response: ', response);
        if (!response.ok) {
            throw new Error(`Status ${response.status}`);
        }
        const data = await response.json();
        console.log('data: ', data);
    } catch (err) {
        console.log('err: ', err);
    }
    
}

getPostById(2);



/**
 * Trimiteți o cerere POST pentru a crea o nouă postare si 
 * afisati rezultatul în consola;
 */

async function createPost(postObject) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: postObject.title,
            content: postObject.content,
        }),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8'
        }
    });
    console.log('response: ', response);
}

createPost ({
    title: 'Post title 1',
    content: 'Post content 1',
})

