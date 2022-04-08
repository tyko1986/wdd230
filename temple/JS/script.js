//* TOGGLE MENU *//
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const x = document.getElementById("hamburgerBtn");
  
  x.onclick = toggleMenu;

  /* Alerts Btn */

  function closeAlert(){

    document.querySelector('.alert').classList.toggle('unvisible');
  }
  
  const btn = document.getElementById('alertBtn');

  btn.onclick = closeAlert;

  

//*** WEATHER 38.98 -77.10***/

const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=70&lon=75&exclude=minutely,hourly&appid=f2bc956b956e1c5893f7a9079b13c5a1&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector("#current-temp").textContent = Math.round(Number(jsObject.current.temp));
    
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    let desc = jsObject.current.weather[0].description;
    desc = desc.split(' ').map(capitalize).join(' ');

    document.querySelector("#currentWeatherIcon").setAttribute("src", iconsrc);
    document.querySelector("#currentWeatherIcon").setAttribute("alt", desc);
    document.querySelector("#currentWeatherDescription").textContent = desc;

    const windspeed = jsObject.current.wind_speed;
    document.querySelector("#windspeed").textContent = windspeed;

    /* Weather Alerts  */

    
    
    if ('alerts' in jsObject === false){
      document.querySelector('#alert').innerHTML = `NO WARNING ALERTS !!!`;
      document.querySelector('.alert').classList.toggle('unvisible');
    }else{
      let weatherAlert = "";
    for(let i in jsObject.alerts){
      weatherAlert += jsObject.alerts[i].event + " - ";
    }
      
      document.querySelector('#alert').innerHTML = `WARNING ${weatherAlert} ALERT !!!`;  
    }
    

    /* Temperature Forecast */
    const firstDayTemp = Math.round(Number(jsObject.daily[0].temp.day));
    const secondDayTemp = Math.round(Number(jsObject.daily[1].temp.day));
    const thirdDayTemp = Math.round(Number(jsObject.daily[2].temp.day));
    document.querySelector('#firstTemperature').textContent = firstDayTemp;
    document.querySelector('#secondTemperature').textContent = secondDayTemp;
    document.querySelector('#thirdTemperature').textContent = thirdDayTemp;

    /* Forecast Conditions */
    let firstdescription = jsObject.daily[0].weather[0].description;
    let seconddescription = jsObject.daily[1].weather[0].description;
    let thirddescription = jsObject.daily[2].weather[0].description;

    firstdescription = firstdescription.split(' ').map(capitalize).join(' ');
    seconddescription = seconddescription.split(' ').map(capitalize).join(' ');
    thirddescription = thirddescription.split(' ').map(capitalize).join(' ');
    
    const firsticon = `https://openweathermap.org/img/w/${jsObject.daily[0].weather[0].icon}.png`;
    const secondicon = `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
    const thirdicon = `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;

    document.querySelector("#firstIcon").setAttribute("src", firsticon);
    document.querySelector("#secondIcon").setAttribute("src", secondicon);
    document.querySelector("#thirdIcon").setAttribute("src", thirdicon);

    document.querySelector("#firstIcon").setAttribute("alt", firstdescription);
    document.querySelector("#secondIcon").setAttribute("alt", seconddescription);
    document.querySelector("#thirdIcon").setAttribute("alt", thirddescription);

    document.querySelector('#firstCondition').textContent = firstdescription;
    document.querySelector('#secondCondition').textContent = seconddescription;
    document.querySelector('#thirdCondition').textContent = thirddescription;



      //Wind Chill Calculation//

let temperature = Number(jsObject.current.temp);
let speed = Number(jsObject.current.wind_speed);
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

document.querySelector('#windChillTemp').innerHTML = `${windchill} &#8457;`
    
});



function capitalize(word){
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}


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

let tomorrow = '';
let tomorrow2 = '';
let tomorrow3 = '';


if(day === 4){
  tomorrow = days[day+1];
  tomorrow2 = days[day+2];
  tomorrow3 = days[day-4]; 
} else if (day === 5){
  tomorrow = days[day+1];
  tomorrow2 = days[day-5];
  tomorrow3 = days[day-4];
} else if (day === 6){
  tomorrow = days[day-6];
  tomorrow2 = days[day-5];
  tomorrow3 = days[day-4];
}else {
  tomorrow = days[day+1];
  tomorrow2 = days[day+2];
  tomorrow3 = days[day+3];
}

let dayAfterTomorrow = days[day+2];

document.getElementById(
  "today_date"
).innerHTML = `${dayName}, ${dayNumber} ${monthName} ${currentYear}`;

document.querySelector('#firstDay').innerHTML = `${tomorrow}`;
document.querySelector('#secondDay').innerHTML = `${tomorrow2}`;
document.querySelector('#thirdDay').innerHTML = `${tomorrow3}`;


