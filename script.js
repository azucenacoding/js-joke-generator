// Declare a variable called jokeElement and set it equal to the element with the id of 'joke' from the HTML page
const jokeElement = document.getElementById('joke');

// Declare a variable called jokeBtn and set it equal to the element with the id of 'joke-btn' taken from the HTML page
const jokeBtn = document.getElementById('joke-btn');




// Declare an arrow function called generateJoke; Inside, declare a variable called xhr and set it equal to a new XML HTTP request; Open (or initialize) a new GET request to the following API endpoint; If the readystate is equal to 4, and if the status is equal to 200, set the joke element's inner HTML equal to the value of the parsed response text from the JSON string; Else, set the inner HTML to reflect that something went wrong in the GET request; Send the XML request
// const generateJoke = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4) {
//             if (this.status === 200) {
//                 jokeElement.innerHTML = JSON.parse(this.responseText).value;
//             } else {
//                 jokeElement.innerHTML = 'Something went wrong. That is not a joke.';
//             }
//         }
//     }
//     xhr.send();
// }


// Declare a function called generateJoke; Inside the function, make a fetch request to the following API endpoint and then resolve the first promise with the response by converting it into JSON; Then, resolve the new promise with data by updating the inner HTML of jokeElement with the parsed data's value
const generateJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then(data => {
        jokeElement.innerHTML = JSON.parse(data.value);
    })
}


// Add an event listener onto jokeBtn that listens for a click, which then calls the generateJoke function
jokeBtn.addEventListener('click', generateJoke);

// Add an event listener onto the document that listens for the DOM content to fully load, which then will call the generateJoke function
document.addEventListener('DOMContentLoaded', generateJoke);