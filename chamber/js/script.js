//* Last Date of Modification *//

const updatedDate = document.querySelector("#updatedDate");
updatedDate.innerHTML = `Last Modification: ${document.lastModified}`;
const year = new Date();
const currentYear = year.getFullYear();
document.getElementById(
  "currentYear"
).innerHTML = `&copy; ${currentYear} Zarahemla Chamber`;

//* Todays Date*//

const months = [
  "January",
  "February",
  "March",
  "Abril",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = year.getMonth();
const dayNumber = year.getDate();
const day = year.getDay();

let monthName = months[month];
let dayName = days[day];

document.getElementById(
  "today_date"
).innerHTML = `${dayName}, ${dayNumber} ${monthName} ${currentYear}`;

//* TOGGLE MENU *//
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

//Message Display//

if (day === 2) {
  displayBanner();
}

function displayBanner() {
  alert(
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
  );
}

//Wind Chill Calculation//

let temperature = document.querySelector('#temperature').textContent;
let speed = document.querySelector('#windSpeed').textContent;
let windchill = '';

if (temperature <= 50 && speed > 3){
  windchill = windChill(temperature,speed);
} else{
    windchill = 'N/A';
  
}

function windChill(temperature, speed){
  {
    windchill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(speed,0.16))) + (0.4275 * temperature * (Math.pow(speed,0.16)))); 
    return windchill;
  }
}

document.querySelector('#windChill').innerHTML = ` ${windchill} &#8457;`

