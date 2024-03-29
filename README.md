# Mega Sena Number Generator

## Overview

This is a simple web application for generating random Mega Sena lottery numbers. Users can select up to 6 numbers from a grid and use the "Completar com números aleatórios" button to fill the remaining slots with random numbers. There is also a "Limpar" button to clear the selected numbers.

## Usage

- Click on the numbers in the grid to select or deselect them.
- Use the "Completar com números aleatórios" button to fill the remaining slots with random numbers.
- Use the "Limpar" button to clear the selected numbers.

## How It Works

The application is built with HTML, CSS, and JavaScript. It dynamically creates a grid of numbers (1 to 60) as buttons. Users can interact with the grid by selecting or deselecting numbers. The application ensures that only 6 numbers can be selected at a time. The "Completar com números aleatórios" button fills the remaining slots with random numbers.

## Code Structure

The JavaScript code is organized as follows:

- **checkNumOfSelectedNumbers():** Checks the number of selected elements in the numbers grid.
- **checkSelectedAndMissing():** Checks the selected elements in the numbers grid and returns information about them.
- **fillWithRandom():** Completes the current bet with random numbers (6 total).
- **clearSelected():** Clears the selected elements on the numbers grid.
- **DOMContentLoaded Event:** Loads numbers into the grid on the DOMContentLoaded event.
- **Click Event Listener:** Handles the selection/deselection of numbers in the grid.
- **Event Listeners for Buttons:** Listens for button clicks to fill with random numbers or clear the selected numbers.

## How to Contribute

Feel free to contribute to this project by forking the repository, making changes, and creating a pull request. Bug fixes, feature enhancements, and other improvements are welcome!
