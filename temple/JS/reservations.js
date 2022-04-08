//* TOGGLE MENU *//
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

//*******    DATES    ********//

//* Last Date of Modification *//

const updatedDate = document.querySelector("#updatedDate");
updatedDate.innerHTML = `Last Modification: ${document.lastModified}`;
const year = new Date();
const currentYear = year.getFullYear();
document.getElementById(
  "currentYear"
).innerHTML = `&copy; ${currentYear} The Temple Inn & Suites Hotel`;

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
let day = Number(year.getDay());

let monthName = months[month];
let dayName = days[day];

document.getElementById(
  "today_date"
).innerHTML = `${dayName}, ${dayNumber} ${monthName} ${currentYear}`;
