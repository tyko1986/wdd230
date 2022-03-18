const requestURL = "https://tyko1986.github.io/wdd230/chamber/JSON/directory.json";
const cards = document.querySelector('#cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    const goldMembers = directory.filter(x => (x.membership === "silver"));

    goldMembers.forEach(displayGoldenMembers);
});

function displayGoldenMembers(company){

    let card = document.createElement('section');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let logo = document.createElement('img');

    name.textContent = company.name;
    address.textContent = company.address;
    phone.textContent = company.phone;
    website.textContent = company.website;

    
    logo.setAttribute('src', company.logo);
    logo.setAttribute('class', 'directoryLogo')
    logo.setAttribute('alt', company.name + 'logo');
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

    cards.appendChild(card);
}
