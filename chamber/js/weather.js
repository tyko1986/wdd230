const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=4699066&appid=f2bc956b956e1c5893f7a9079b13c5a1&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector("#current-temp").textContent = jsObject.main.temp;
    
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;
    desc = desc.split(' ').map(capitalize).join(' ');

    document.querySelector("#weather-icon").setAttribute("src", iconsrc);
    document.querySelector("#weather-icon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;

    const windspeed = jsObject.wind.speed;
    document.querySelector("#windspeed").textContent = windspeed;



      //Wind Chill Calculation//

let temperature = Number(jsObject.main.temp);
let speed = Number(jsObject.wind.speed);
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
    
});


function capitalize(word){
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}