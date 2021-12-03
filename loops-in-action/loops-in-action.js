// const calculateSumButtonElement = document.querySelector('#calculator button');
// function calculateSum() {
//   const userNumberInputElement = document.getElementById('user-number');
//   const enteredNumber = userNumberInputElement.value;
//   let sumUpToNumber = 0;
//   for (let i = 0; i <=enteredNumber; i++) {
//     sumUpToNumber= sumUpToNumber + i;
//   }
//   const outputNumber= document.getElementById('calculated-sum');
//   outputNumber.textContent = sumUpToNumber;
//   outputNumber.style.display= 'block';};

// calculateSumButtonElement.addEventListener('click',calculateSum);

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum(params) {
  const userNumberInputElement = document.getElementById("user-number");
  const enterednumber = userNumberInputElement.value;

  let sumUpToNumber = 0;
  for (let i = 0; i <= enterednumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }
  const outPutResultElement = document.getElementById("calculated-sum");
  outPutResultElement.textContent = sumUpToNumber;
  outPutResultElement.style.display = "block";
}
calculateSumButtonElement.addEventListener("click", calculateSum);

// const highlightAllLinksButtonElement = document.querySelector(
//   "#highlight-links button"
// );

// function highlightLinks() {
//   const anchorElements = document.querySelectorAll("#highlight-links a");

//   for (const anchorElement of anchorElements) {
//     anchorElement.classList.add("highlight");
//   }
// }
// highlightAllLinksButtonElement.addEventListener("click", highlightLinks);

const highlightAnchorElementsButton = document.querySelector(
  "#highlight-links button"
);
function highlightingAllAnchorElements() {
  const highlightedElements = document.querySelectorAll("#highlight-links a");
  for (const anchorElement of highlightedElements) {
    anchorElement.classList.add("highlight");
  }
}
highlightAnchorElementsButton.addEventListener(
  "click",
  highlightingAllAnchorElements
);

const userData = {
  firstName: "ahmed",
  lastName: "turkey",
  age: 32,
};
const displyUserDataButtonElement = document.querySelector("#user-data button");

function displyingUserData(params) {
  const outputData = document.getElementById("output-user-data");
  outputData.innerHTML = "";
  for (const propertyName in userData) {
    const newDataListElement = document.createElement("li");
    const outputText =
      propertyName.toLocaleUpperCase() + ": " + userData[propertyName];
    newDataListElement.textContent = outputText;
    outputData.append(newDataListElement);
  }
}
displyUserDataButtonElement.addEventListener("click", displyingUserData);
// const userData = {
//   firstName: "ahmed",
//   lastName: "turkey",
//   age: 32,
// };
// const displayUserDataButtonElement =
//   document.querySelector("#user-data button");

// function displayUserData() {
//   const outputData = document.getElementById("output-user-data");

//   outputData.innerHTML = "";

//   for (const propertyName in userData) {
//     const newDataListElement = document.createElement("li");
//     const outPutText =
//       propertyName.toUpperCase() + ":" + userData[propertyName];
//     newDataListElement.textContent = outPutText;
//     outputData.append(newDataListElement);
//   }
// }

// displayUserDataButtonElement.addEventListener("click", displayUserData);

// const rollDiceButtonElement = document.querySelectorAll("#statistics button");

// function rollDice() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// function driveNumbersOfDiceRoll() {
//   const targetNumberInputElement =
//     document.getElementById("user-target-number");
//   const diceRollsLi = document.getElementById("dice-rolls");
//   const enteredNumber = targetNumberInputElement.value;
//   diceRollsLi.innerHTML = "";

//   let hasRolledTargetNumber = false;
//   let numberOfRolls = 0;
//   while (!hasRolledTargetNumber) {
//     const rolledNumber = rollDice();
//     //  if (rolledNumber == enteredNumber) {
//     // hasRolledTargetNumber = true;
//     //  }
//     numberOfRolls++;
//     const newRollListElement = document.createElement("li");
//     const outputtext = "roll";
//     +numberOfRolls + ": " + rolledNumber;
//     newRollListElement.textContent = outputtext;
//     diceRollsLi.append(newRollListElement);
//     hasRolledTargetNumber = rolledNumber == enteredNumber;
//   }
//   const outputTotalRollsElement = document.getElementById("output-total-rolls");
//   const outputTargetNumberElement = document.getElementById(
//     output - target - number
//   );
//   outputTargetNumberElement.textContent = enteredNumber;
// }
// rollDiceButtonElement.addEventListener("click", driveNumbersOfDiceRoll);
const rollDiceButtonElement = document.querySelector("#statistics button ");
function rollDice() {
  let rand = Math.ceil(Math.random() * 6);
  return rand;
}
function deriveNumberOfDiceRolls() {
  const targetNumberInputElement = document.getElementById("user-target-number");
  const diceRollsLi = document.getElementById("dice-rolls");
  const enteredNumber = +targetNumberInputElement.value;
  diceRollsLi.innerHTML = "";
  let hasRolledTargetNumber = false;
  let counter = 0;
  while (!hasRolledTargetNumber) {
    counter++;
    const newRollListElement = document.createElement('li');
    const rolledNumber = rollDice();
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }
  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById('output-target-number');
  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = counter;
}
rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
