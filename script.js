const callbackLoaded = () => console.log('page loaded!');
const callbackDOMContentLoaded = () => console.log('DOM content loaded!');
window.addEventListener('load', callbackLoaded);
window.addEventListener('DOMContentLoaded', callbackDOMContentLoaded);
console.log('not loaded yet');
// EVENT HANDLERS
// 1- Put an onclick attribute on an element in the html (console.log something).
// 2- Put an onclick on an element in javascript.
// 3- There can only be one "on-event" on an element. Which of the previous two wins?

// EVENT LISTENERS
// 4- Basic syntax.
// 5- Bubbling and capturing phases.
// 6- If we add "click" event listeners to a bunch of elements nested inside one another, in what order are "the wires tripped"? Is there a way we can control this?
// 7- Add a "click" event listener to an element. Clicking it makes it double in size.

// THE EVENT OBJECT
// 8- As the event bubbles up, event.target holds a reference to the innermost thing we clicked. Can you prove this using console.logs?
// 9- Inspect the event object for other useful pieces of information.
// 10- Add a "input" event listener to an input element. Log event.target.value to the console as we type inside the input.
// 11- Add a "click" event listener to the document. It sets the textContent of the h1 to be the coordinates of the click.

// PREVENT DEFAULT
// 12- Find a link to Google's homepage, and add a "click" event listener that prevents the link from doing its default "click" action.
// 13- Find a checkbox and programmatically prevent it from being checked.
// 14- Add a second checkbox in the html and prevent it from being toggled unless the first one is checked.

// STOP PROPAGATION VS. STOP IMMEDIATE PROPAGATION
// 15- What's the difference between the two?


const body = document.body;
const heading = document.querySelector('#catsHeading')
const container = document.querySelector('#container');
const buttonContainer = document.querySelector('.button-container');
const button1 = document.querySelector('button:nth-of-type(1)');
const button2 = document.querySelector('button:nth-of-type(2)');
