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



document.getElementById("today_date").innerHTML = `${dayName}, ${dayNumber} ${monthName} ${currentYear}`;




/******** TEMPLES CARDS ***********/

const templeApi = "https://tyko1986.github.io/wdd230/temple/JSON/temples.json";
const cards = document.querySelector('#templeCard');

fetch(templeApi)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const temples = jsonObject['temples'];
  temples.forEach(displayTemples);
});

function displayTemples(temples){

// Create elemnts to add to the Card
let card = document.createElement('section');
let name = document.createElement('h2');
let address = document.createElement('p');
let phone = document.createElement('p');
let picture = document.createElement('img');
let email = document.createElement('p');
let services = document.createElement('p');
let history = document.createElement('p');
let ordinances = document.createElement('p');
let sessions = document.createElement('p');
let closure = document.createElement('p');
let button = document.createElement('button');

//Add the text content to each elemnt

card.setAttribute('id',temples.email)
name.textContent = temples.name;
address.innerHTML = `<strong>Address: </strong>${temples.address}`;
phone.innerHTML = `<strong>Phone Num: </strong>${temples.phone}`;
picture.setAttribute('src',temples.picture);
picture.setAttribute('alt',temples.name);
email.innerHTML = `<strong>Email: </strong>${temples.email}`;
services.innerHTML = `<strong>Services: </strong>${temples.services}`;
history.innerHTML = `<strong>History: </strong> <br><strong>Announced: </strong>${temples.history[0].announced}  <br><strong>Groundbreaking: </strong>${temples.history[0].groundbreaking}  <br><strong>Dedicated: </strong>${temples.history[0].dedicated}`;
ordinances.innerHTML = `<strong>Ordinances: Tuesday to Friday: </strong>${temples.ordinance_schedule[0].between_week}  <br><strong>Saturday: </strong>${temples.ordinance_schedule[0].weekends}`;
sessions.innerHTML = `<strong>Sessions: Tuesday to Friday: </strong>${temples.session_schedule[0].between_week} <br><strong>Saturday: </strong>${temples.session_schedule[0].weekends}`;
closure.innerHTML = `<strong>Temple Closure: </strong>${temples.closure_schedule}`;
button.setAttribute('id', temples.name);
button.innerHTML = `&#128077`;


// add the elements to the card

card.appendChild(name);  
card.appendChild(address);
card.appendChild(phone);  
card.appendChild(picture);
card.appendChild(email);
card.appendChild(services);
card.appendChild(history);  
card.appendChild(ordinances);
card.appendChild(sessions);
card.appendChild(closure);
card.appendChild(button);

cards.appendChild(card);

function saveLike(){
  
  
  let templeName = temples.name;
  let allButtons = document.querySelectorAll('.liked');

  
  for (i=0; i<allButtons.length; i++){
    allButtons[i].classList.remove('liked')
  }
    
  likeBtn.classList.add('liked');
  

  templeList = [];
  templeList.push(templeName);

  localStorage.setItem('temple-ls', templeList);

  const likesection = document.getElementById(temples.email);
  likesection.classList.add('liked');

}

const likeBtn = document.getElementById(temples.name);
likeBtn.onclick = saveLike;

} 

if (localStorage.getItem('temple-ls') === "Houston Temple"){
  document.getElementById('houston_temple@churchofjesuschrist.org').classList.add('liked');
};







