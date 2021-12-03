// // document.body.children[1].children[0].href = 'https://google.com';  
// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'https://google.com';  
// anchorElement = document.querySelector('p a');
// anchorElement.href = 'https://academind.com'
// Exercise Time!


let firstElement = document.body.children[0];
console.dir(firstElement)
let parent = firstElement.parentElement;
console.dir(parent)
let sibling = firstElement.nextElementSibling;
console.dir(sibling)
firstElement = document.getElementById('first-element');
let secondElement = document.querySelector('.second' );

document.querySelector('.second' ).innerHTML = 'any text';
// document.body.children[1] = 'any text';
 secondElement.textContent = 'edited with js';

 let newAnchorElement= document.createElement('a');
 newAnchorElement.href =  'https://google.com';
 newAnchorElement.textContent = 'another link with js';
 let firstParagraph = document.querySelector('.second');
  firstParagraph.append(newAnchorElement);
   firstElement.remove();
// firstElement.parentElement.removeChild(firstElement); for older browsers
firstParagraph.parentElement.append(firstParagraph);
firstParagraph.innerHTML = ' hi <strong>bold</strong>';
