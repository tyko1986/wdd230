/******** TEMPLES CARDS ***********/

const templeApi = "https://github.com/tyko1986/wdd230/blob/main/temple/JSON/temples.JSON";
const cards = document.querySelector('.templeCard');

fetch(templeApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});

function displayTemples(){

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

  //Add the text content to each elemnt

  name.textContent = temples.name;
  address.textContent = temples.address;
  phone.textContent = temples.phone;
  picture.setAttribute('src',temples.picture);
  picture.setAttribute('alt',temples.name);
  picture.setAttribute('loading','lazy');
  email.textContent = temples.email
  services.textContent = temples.services;
  history.innerHTML = `,History: Announced: ${temples.history[0].announced} - Groundbreaking: ${temples.history[0].groundbreaking} - Dedicated: ${temples.history[0].dedicated}`;
  ordinances.textContent = `Ordinances: Tuesday to Friday: ${temples.ordinances_schedule[0].between_week} - Saturday: ${temples.ordinances_schedule[0].weekends}`;
  sessions.textContent = `Sessions: Tuesday to Friday: ${temples.session_schedule[0].between_week} - Saturday: ${temples.session_schedule[0].weekends}`;
  closure.textContent = temples.closure_schedule;

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

  cards.appendChild(card);
    
} 