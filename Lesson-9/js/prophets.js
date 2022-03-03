const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});


function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let placeBirth = document.createElement('p');
    let death = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    birthDate.textContent = "Birth Date: " + prophet.birthdate;
    placeBirth.textContent = "Place of Birth: " + prophet.birthplace;
    death.textContent = "Date of Death: " + prophet.death;
    
    let orderPlace = '';


    if (prophet.order === 1) {
      orderPlace = prophet.order + 'st'
    } else if (prophet.order === 2) {
      orderPlace = prophet.order + 'nd'
    } else if (prophet.order === 3) {
      orderPlace = prophet.order + 'rd'
    } else {
      orderPlace = prophet.order + 'th'
    }


 
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname + ',' + orderPlace + ' ' + 'President of the Church');
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(placeBirth);
    card.appendChild(death);
    card.appendChild(portrait);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }