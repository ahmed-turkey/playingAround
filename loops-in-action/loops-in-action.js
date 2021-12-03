const calculateSumButtonElement = document.querySelector('#calculator button');
function calculateSum() {
  const userNumberInputElement = document.getElementById('user-number');
  const enteredNumber = userNumberInputElement.value;
  let sumUpToNumber = 0;
  for (let i = 0; i <=enteredNumber; i++) {
    sumUpToNumber= sumUpToNumber + i;
  }
  const outputNumber= document.getElementById('calculated-sum');
  outputNumber.textContent = sumUpToNumber;
  outputNumber.style.display= 'block';};

calculateSumButtonElement.addEventListener('click',calculateSum);



// const calculateSumButtonElement = document.querySelector("#calculator button");

// function calculateSum(params) {
//   const userNumberInputElement = document.getElementById("user-number");
//   const enterednumber = userNumberInputElement.value;

//   let sumUpToNumber = 0;
//   for (let i = 0; i <= enterednumber; i++) {
//     sumUpToNumber = sumUpToNumber + i;
//   }
//   const outPutResultElement = document.getElementById("calculated-sum");
//   outPutResultElement.textContent = sumUpToNumber;
//   outPutResultElement.style.display = "block";
// };
// calculateSumButtonElement.addEventListener("click", calculateSum);

const highlightAllLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}
highlightAllLinksButtonElement.addEventListener("click", highlightLinks);

const userData = {
  firstName: "ahmed",
  lastName: "turkey",
  age: 32,
};
const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputData = document.getElementById("output-user-data");

  outputData.innerHTML = "";

  for (const propertyName in userData) {
    const newDataListElement = document.createElement("li");
    const outPutText =
      propertyName.toUpperCase() + ":" + userData[propertyName];
    newDataListElement.textContent = outPutText;
    outputData.append(newDataListElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

const rollDiceButtonElement = document.querySelectorAll("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function driveNumbersOfDiceRoll() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollsLi = document.getElementById("dice-rolls");
  const enteredNumber = targetNumberInputElement.value;
  diceRollsLi.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;
  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    //  if (rolledNumber == enteredNumber) {
    // hasRolledTargetNumber = true;
    //  }
    numberOfRolls++;
    const newRollListElement = document.createElement("li");
    const outputtext = "roll";
    +numberOfRolls + ": " + rolledNumber;
    newRollListElement.textContent = outputtext;
    diceRollsLi.append(newRollListElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }
  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    output - target - number
  );
  outputTargetNumberElement.textContent = enteredNumber;
}
rollDiceButtonElement.addEventListener("click", driveNumbersOfDiceRoll);
