const body = document.body;

const container = document.querySelector('#container');
const section = document.querySelector('#catsSection');
const heading = document.querySelector('#catsHeading');

const buttonContainer = section.querySelector('.button-container');
const button1 = buttonContainer.querySelector('button:nth-of-type(1)');
const button2 = buttonContainer.querySelector('button:nth-of-type(2)');

let counter = 0;

// hey browser, when the button1 gets clicked
// go ahead and invoke that callback
// which I passed as second arg
// FOR ME
button1.addEventListener('click', (eventObject) => {
  console.log('DA BUTTON GOT CLICKED ALRIGHT');
  console.log(eventObject);
  counter++;
  heading.textContent = counter;
});

button1.addEventListener('click', (e) => {
  console.log('gaga');
});

button2.onclick = function () {
  console.log('cancel click');
};

// document.addEventListener('click', () => {
//   console.log('DOCUMENT GOT CLICKED');
// });

// EVENTS
// 0- What is an event? Types of events.

// EVENT HANDLERS AND EVENT LISTENERS
// 1- Put an onclick attribute on an element in the html (console.log something).
// 2- Put an onclick on an element in javascript.
// 3- There can only be one "on-event" on an element. Which of the previous two wins?
// 4- The addEventListener method of elements in modern browsers.

// TYPES OF EVENTS
// 5- Explore the different kinds of events.
// 6- Build some examples.

// EVENT LISTENERS IN DEPTH
// 7- Bubbling and capturing phases.
// 8- If we add "click" event listeners to a bunch of elements nested inside one another, in what order are "the wires tripped"? Is there a way we can control this?
// 9- Add a "click" event listener to an element. Clicking it makes it double in size.

// THE EVENT OBJECT
// 10- As the event bubbles up, event.target holds a reference to the innermost thing we clicked. Can you prove this using console.logs?
// 11- Inspect the event object for other useful pieces of information.
// 12- Add a "input" event listener to an input element. Log event.target.value to the console as we type inside the input.
// 13- Add a "click" event listener to the document. It sets the textContent of the h1 to be the coordinates of the click.

// PREVENT DEFAULT
// 14- Find a link to Google's homepage, and add a "click" event listener that prevents the link from doing its default "click" action.
// 15- Find a checkbox and programmatically prevent it from being checked.
// 16- Add a second checkbox in the html and prevent it from being toggled unless the first one is checked.

// STOP PROPAGATION VS. STOP IMMEDIATE PROPAGATION
// 17- What's the difference between the two?
