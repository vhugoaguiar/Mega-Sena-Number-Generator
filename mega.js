/**
 * ----- Mega Sena Number Generator -----
 * */

'use strict';

const NUMBERS_TOTAL = 60;

const numbersGrid = document.querySelector('.numbers-grid');
const fillButton = document.querySelector('.button-random');
const clearButton = document.querySelector('.button-clear');

/**
 * Checks the number of selected elements in the numbers grid.
 * @returns {number} The number of elements in the grid that are selected (have the 'selected' class).
 */
function checkNumOfSelectedNumbers() {
  return numbersGrid.querySelectorAll('.selected').length;
}

/**
 * Checks the selected elements in the numbers grid and returns information about them.
 * @returns {Object} An object containing:
 *   - numberOfSelected: The number of elements in the grid that are selected (have the 'selected' class).
 *   - numberOfMissing: The number of missing numbers in the grid (total expected: 6).
 *   - selectedNumbers: An array with the numbers selected (textContent of the elements with the 'selected' class).
 */
function checkSelectedAndMissing() {
  const selectedElements = numbersGrid.querySelectorAll('.selected');
  const selectedNumbers = Array.from(selectedElements).map(
    element => element.textContent
  );

  const totalNumbers = 6;
  const numberOfMissing = totalNumbers - selectedElements.length;

  return {
    numberOfSelected: selectedElements.length,
    numberOfMissing: numberOfMissing,
    selectedNumbers: selectedNumbers,
  };
}

/**
 * Completes the current bet with random numbers (6 total).
 * @param {Object} selectedAndMissing - The object returned by checkSelectedAndMissing().
 */
function fillWithRandom({ numberOfMissing, selectedNumbers }) {
  const selectedSet = new Set(selectedNumbers); // I'm using a set here to help me fixate this content, but the .includes() array method would work just the same
  for (let i = 0; i < numberOfMissing; i++) {
    let random;
    do {
      random = Math.floor(Math.random() * 60 + 1);
    } while (selectedSet.has(random));
    numbersGrid.querySelector(`.number${random}`).classList.add('selected');
  }
}

/**
 * Clears the selected elements on the numbers grid
 */
function clearSelected(){
    const selected = numbersGrid.querySelectorAll('.selected');
    selected.forEach(element => element.classList.remove('selected'));
}

/**
 * Load numbers into the numbers grid on DOMContentLoaded event.
 */
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= NUMBERS_TOTAL; i++) {
    const numberElement = document.createElement('button');
    numberElement.classList.add('number', `number${i}`);
    numberElement.textContent = i;
    numbersGrid.appendChild(numberElement);
  }
});

/**
 * Numbers grid event listener for selecting/deselecting numbers.
 */
numbersGrid.addEventListener('click', event => {
  const clickedButton = event.target;

  if (checkNumOfSelectedNumbers() < 6 && clickedButton.tagName === 'BUTTON') {
    clickedButton.classList.toggle('selected');
  } else if (
    clickedButton.tagName === 'BUTTON' &&
    clickedButton.classList.contains('selected')
  ) {
    clickedButton.classList.remove('selected');
  }
});

/**
 * Event listener for filling with random numbers.
 */
fillButton.addEventListener('click', () => {
  fillWithRandom(checkSelectedAndMissing());
});

/**
 * Event listener for clearing the selected numbers
 */
clearButton.addEventListener('click', clearSelected)