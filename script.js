const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const country = document.querySelector(".country");
const icon = document.querySelector(".icon");
const coludOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");

const forecastDate1 = document.querySelector(".forecast-date-1");
const forecastDate2 = document.querySelector(".forecast-date-2");
const forecastTemp1 = document.querySelector(".forecast-temp-1");
const forecastTemp2 = document.querySelector(".forecast-temp-2");
const condition1 = document.querySelector(".condition-1");
const icon1 = document.querySelector(".icon-1");
const condition2 = document.querySelector(".condition-2");
const icon2 = document.querySelector(".icon-2");

// Default value
let cityInput = "Delhi";

cities.forEach((city) => {
  city.addEventListener("click", (e) => {
    cityInput = e.target.innerHTML;
    fetchWeatherData();
    app.style.opacity = "0";
  });
});

form.addEventListener("submit", (e) => {
  if (search.value.length == 0) {
    alert("Please type in a city name");
  } else {
    cityInput = search.value;
    fetchWeatherData();
    search.value = "";
    app.style.opacity = "0";
  }
  e.preventDefault();
});

function dayOfTheWeek(month, day, year) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[new Date(`${month}/${day}/${year}`).getDay()];
}

function fetchWeatherData() {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1768f1fd0b11460a930173614221004&q=${cityInput}&days=5`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      temp.innerHTML = data.current.temp_c + "&#176;C";
      conditionOutput.innerHTML = data.current.condition.text;

      const date = data.location.localtime;
      const y = parseInt(date.substr(0, 4));
      const m = parseInt(date.substr(5, 2));
      const d = parseInt(date.substr(8, 2));
      const time = date.substr(11);

      dateOutput.innerHTML = `${dayOfTheWeek(m, d, y)}  ${m}, ${d}, ${y}`;
      timeOutput.innerHTML = time;

      nameOutput.innerHTML = data.location.name;
      country.innerHTML = data.location.country;

      const iconId = data.current.condition.icon.substr(
        "//cdn.weatherapi.com/weather/64x64".length
      );

      icon.src = "./icons/" + iconId;

      coludOutput.innerHTML = data.current.cloud + "%";
      humidityOutput.innerHTML = data.current.humidity + "%";
      windOutput.innerHTML = data.current.wind_kph + "km/h";

      let timeOfDay = "day";

      const code = data.current.condition.code;

      if (!data.current.is_day) {
        timeOfDay = "night";
      }

      if (code == 1000) {
        app.style.backgroundImage = `url(./image/${timeOfDay}/clear.jpeg)`;

        btn.style.background = "#e5ba92";
        if (timeOfDay == "night") {
          btn.style.background = "#181e27";
        }
      } else if (
        code == 1003 ||
        code == 1006 ||
        code == 1009 ||
        code == 1030 ||
        code == 1069 ||
        code == 1087 ||
        code == 1135 ||
        code == 1273 ||
        code == 1276 ||
        code == 1279 ||
        code == 1282
      ) {
        app.style.backgroundImage = `url(./image/${timeOfDay}/cloudy.jpeg)`;
        btn.style.background = "#fa6d1b";
        if (timeOfDay == "night") {
          btn.style.background = "#181e27";
        }
      }
      // Rain
      else if (
        code == 1063 ||
        code == 1069 ||
        code == 1072 ||
        code == 1150 ||
        code == 1153 ||
        code == 1180 ||
        code == 1183 ||
        code == 1186 ||
        code == 1189 ||
        code == 1192 ||
        code == 1196 ||
        code == 1204 ||
        code == 1240 ||
        code == 1243 ||
        code == 1246 ||
        code == 1249 ||
        code == 1252
      ) {
        app.style.backgroundImage = `url(./image/${timeOfDay}/rainy.jpeg)`;
        btn.style.background = "#647d75";
        if (timeOfDay == "night") {
          btn.style.background = "#325c80";
        }
      } else {
        app.style.backgroundImage = `url(./image/${timeOfDay}/snowy.jpeg)`;
        btn.style.background = "#4d72aa";
        if (timeOfDay == "night") {
          btn.style.background = "#1b1b1b";
        }
      }
      app.style.opacity = "1";

      //Forecasting
      forecastDate1.innerHTML = data.forecast.forecastday[1].date;
      forecastDate2.innerHTML = data.forecast.forecastday[2].date;

      const iconId1 = data.forecast.forecastday[1].day.condition.icon.substr(
        "//cdn.weatherapi.com/weather/64x64".length
      );
      icon1.src = "./icons/" + iconId1;

      const iconId2 = data.forecast.forecastday[2].day.condition.icon.substr(
        "//cdn.weatherapi.com/weather/64x64".length
      );
      icon2.src = "./icons/" + iconId2;

      forecastTemp1.innerHTML =
        data.forecast.forecastday[1].day.avgtemp_c + "&#176;C";
      forecastTemp2.innerHTML =
        data.forecast.forecastday[2].day.avgtemp_c + "&#176;C";

      condition1.innerHTML = data.forecast.forecastday[1].day.condition.text;
      condition2.innerHTML = data.forecast.forecastday[2].day.condition.text;
    })
    .catch(() => {
      alert("City not found, please try again");
      app.style.opacity = "1";
    });
}

fetchWeatherData();
app.style.opacity = "1";
