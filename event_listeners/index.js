/*
    eventListener: Listen for specific events like clicks or key presses.
*/

// Log when key is pressed
document.addEventListener('keydown', (event) => {
    console.log(`Key down: ${event.key}`);
})

// Log when mouse is clicked
document.addEventListener('click', (event) => {
    console.log(`Clicked at location: ${event.screenX} ${event.screenY}`);
})