const requestURL = "https://tyko1986.github.io/wdd230/chamber/JSON/directory.json";
const spot1 = document.querySelector('#sl1');
const spot2 = document.querySelector('#sl2');
const spot3 = document.querySelector('#sl3');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    const goldMembers = directory.filter(x => (x.membership === "silver"));

    let randomMember1 = goldMembers[Math.floor(Math.random()*goldMembers.length)];
    let randomMember2 = goldMembers[Math.floor(Math.random()*goldMembers.length)];
    let randomMember3 = goldMembers[Math.floor(Math.random()*goldMembers.length)];
    //goldMembers.forEach(displayGoldenMembers);

    displayGoldMembers(randomMember1,spot1);
    displayGoldMembers(randomMember2,spot2);
    displayGoldMembers(randomMember3,spot3);


});

function displayGoldMembers(randomMember,spot){

    let card = document.createElement('section');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let logo = document.createElement('img');

    name.textContent = randomMember.name;
    address.textContent = randomMember.address;
    phone.textContent = randomMember.phone;
    website.textContent = randomMember.website;


    logo.setAttribute('src', randomMember.logo);
    logo.setAttribute('class', 'directoryLogo')
    logo.setAttribute('alt', randomMember.name + 'logo');
    logo.setAttribute('loading', 'lazy');
    name.setAttribute('class','directoryInfo');    
    address.setAttribute('class','directoryInfo');
    phone.setAttribute('class','directoryInfo');    
    website.setAttribute('class','directoryInfo');


    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    spot.appendChild(card);
}    