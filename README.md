# TypeTest

## Idea

I built this project initially using **Vanilla JavaScript**.
I then refactored using **React.js** to showcase the power and efficiency of React.js library.
You can find the React version & Vanilla version in the navigation of the application.

## 🚀 Features

- **New Typing Tests Every Time:** The app has lots of different texts to keep your practice interesting and challenging.
- **Spot Your Mistakes Easily:** If you type something wrong, it'll light up so you can see where you need to improve.
- **Summary After Each Test:** When you finish a test, you get a detailed report of your speed, score, and mistakes.
- **Caps Lock Warning:** It tells you if you've accidentally left Caps Lock on to avoid errors.
- **Errors:** It tells you how many errors you've accumulated per round.

## 🛠️ Technologies

- React.js
- styled-components
- fetch API

## 📝 What I've Learnt

- Problems I solved:

1. How to check the characters of the quote with each character of the input, ensuring to check the position also correlates.
2. I wanted to automatically fetch quote once the current quote has been typed correctly. Solution: executed `checkIfCorrect()` inside of a `useEffect` hook to check for changes in the `result` state variable. Utilised the `result.every()` array helper method to return true if every `item.className` is 'correct', or return `false` if test is not passed as true.

- Strengthened understanding of core Javascript concepts, such as DOM manipulation, event handling and async data fetching with fetch API.
- Vanilla JavaScript requires explicit updates and refreshes to the DOM for every change, typically involving methods like document.createElement() and element.appendChild(). This can be verbose and error-prone, especially for complex interfaces. VS React.js library utilizes a Virtual DOM to efficiently manage updates. React's declarative API simplifies UI development. The primary method for DOM interaction in React is through ReactDOM.render(), which ensures efficient and minimal updates to the actual DOM.
- Improved skills in using Git for version control- resolving merge conflicts.

## 💡 Improvements

- **Summary After Each Test:** When you finish a test, you get a detailed report of your speed, score, and mistakes.
