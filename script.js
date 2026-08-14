import { meteoData } from "./meteodata.js";

const input = document.querySelector(".search__input");

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  input.value = "";
});

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});


// Destructuring
const {
  city,
  day,
  time,
  temp,
  weatherText,
  feelTemp,
  humidity,
  pressure,
  visibility,
  sunrise,
  sunset,
  windPower,
} = meteoData;

const setWeatherInfoFields = (selector, value, mod) => {
  // test on valid params
  if (typeof selector !== "string")
    return console.error("selector is not string");

  const element = document.querySelector(`${selector}`);
  if (!element) return console.error(
    `Element not found: ${selector}`
  );

  // set fields
  if (mod) {
    element.textContent = `${value}${mod}`;
  } else {
    element.textContent = `${value}`;
  };
};

// Location
setWeatherInfoFields(".weather-location__city", city);

// Day
setWeatherInfoFields(".weather-location__day", day);

// Time
setWeatherInfoFields(".weather-location__time", time);

// Temp
setWeatherInfoFields(".weather-temp", temp, "°");

// Weather text
setWeatherInfoFields(".weather-condition__text-label", weatherText);

// Feel temp
setWeatherInfoFields(".weather-condition__feels-like", feelTemp);


const setWeatherItemFields = (selector, value, mod) => {
  // test on valid params
  if (typeof selector !== "string")
    return console.error("selector is not string");

  const element = document.querySelector(`.weather-item--${selector}`);
  if (!element) return console.error(
    `Element not found: .weather-item--${selector}`
  );

  // set fields
  if (mod) {
    element.textContent = `${value}${" " + mod}`;
  } else {
    element.textContent = `${value}`;
  };
};

const setWeatherItemCssVar = (name, value) => {
  document.documentElement.style.setProperty(`--${name}`, value);
};

const value = " .weather-item__value";
const label = " .labels-bar p";

// Humidity
setWeatherItemFields(`humidity ${value}`, humidity, "%");

setWeatherItemCssVar("humidity", humidity);

// Pressure
setWeatherItemFields(`pressure ${value}`, pressure.value);
setWeatherItemFields(`pressure ${label}`, pressure.status);

setWeatherItemCssVar("pressure", pressure.value);

// Visibility
setWeatherItemFields(`visibility ${value}`, visibility.value, "км");
setWeatherItemFields(`visibility ${label}`, visibility.status);

setWeatherItemCssVar("visibility", visibility.value);

// Sunrise
setWeatherItemFields(`sunrise ${value}`, sunrise.value);
setWeatherItemFields(`sunrise ${label}`, sunrise.status);

// Sunset
setWeatherItemFields(`sunset ${value}`, sunset.value);
setWeatherItemFields(`sunset ${label}`, sunset.status);

// Wind direction
setWeatherItemFields(`wind ${value}`, windPower.value, "м/с");
setWeatherItemFields(`wind ${label}`, windPower.status);
