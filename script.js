/* step 1 :- taking element for html to js
step 2:- manupulating element
step 3 :- selecting element back to html for js  */

// document.getElementsByTagName('h1');
// document.getElementsByClassName('className');
// document.getElementById('id');

const heading = document.querySelector('h1'); // Single startting tag

// const heading = document.querySelectorAll('h1'); // for multiple tag

// heading.innerHTML = 'good morning';
heading.style.color = 'white';
// heading.style.textTransform = 'uppercase';

const body = document.querySelector('body');

function randomNumberColor() {
  return Math.floor(Math.random() * 255);
}
setInterval(() => {
  body.style.backgroundColor = `rgb(${randomNumberColor()} ${randomNumberColor()} ${randomNumberColor()})`;
}, 300);
