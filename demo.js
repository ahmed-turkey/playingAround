const inputElement = document.querySelector("#product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maxAllowedChars = inputElement.maxLength;

function updateRemainingChars(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  const remainingChars = maxAllowedChars - enteredTextLength;
  remainingCharsElement.textContent = remainingChars;
  
  if (remainingChars === 0) {
    remainingCharsElement.classList.add("error");
    inputElement.classList.add("error");
  } else if (remainingChars <= 10) {
    remainingCharsElement.classList.add("warning");
    inputElement.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    inputElement.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("error", "warning");
    inputElement.classList.remove("error", "warning");
  }
}
inputElement.addEventListener("input", updateRemainingChars);
