const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=f2bc956b956e1c5893f7a9079b13c5a1&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector("#current-temp").textContent = jsObject.main.temp;

    document.querySelector("#humidity").textContent = jsObject.main.humidity;
    document.querySelector("#sensation").textContent = jsObject.main.feels_like;
    
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windspeed = jsObject.wind.speed;

    document.querySelector("#icon-src").textContent = iconsrc;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;
    document.querySelector("#windspeed").textContent = windspeed;
    

  });
