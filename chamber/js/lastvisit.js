const daysDisplay = document.querySelector('.lastVisit');
let lastvisit = window.localStorage.getItem('lastvisit-ls');
const FACTOR = 1000 * 60 * 60 * 24;
let daysbetween = Date.now() - lastvisit;
let numOfDays = Math.round(daysbetween / FACTOR);

if (numOfDays < 1){
    daysDisplay.textContent = `Your last visit was today`;
} else {
    daysDisplay.textContent = `${numOfDays} days since last visit`;
}


localStorage.setItem('lastvisit-ls', Date.now());

