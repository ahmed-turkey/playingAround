let paragraph = document.querySelector("p");
function changeParagraphText(event) {
  paragraph.textContent = "clicked";
  console.log('paragraph clicked');
  console.log(event)
};
paragraph.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector('input');

function countingKeyStroke(event) { 
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    // let enteredText = event.data;
   console.log(enteredText);
    console.log(event);
};

inputElement.addEventListener('input', countingKeyStroke);