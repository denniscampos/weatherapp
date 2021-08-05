document.querySelector("button").addEventListener("click", weatherApp);

const apiKey = "5e7a7eade1f8481381997a34477bd35c";

function weatherApp() {
  const location = document.querySelector("input").value.toLowerCase();

  const url =
    "https://api.weatherbit.io/v2.0/forecast/daily?city=" +
    location +
    "&units=I" +
    "&key=" +
    apiKey;
  const url2 =
    "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=" +
    location +
    "&units=I" +
    "&key=" +
    apiKey;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // Day Variables

      // prettier-ignore
      const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
      const getDate = new Date(data.data[0].datetime);
      const month = getDate.getUTCMonth() + 1; // to get 12 months
      const date = getDate.getUTCDate();
      const year = getDate.getUTCFullYear();
      const day = getDate.getDay();
      // const daysNum = new Date(getDate).getDay() + 1;

      document.querySelector(".todays_day").innerText = days[day];
      document.querySelector(".date_format").innerText =
        month + "/" + date + "/" + year;
      document.querySelector(".get_location").innerText = data.city_name;

      // Current temperature
      document.querySelector(".current_temp").innerHTML =
        Math.round(data.data[0].temp) + " &#8457;";

      // Feels like -- create an average from max and min
      document.querySelector(".print").innerHTML =
        Math.round(data.data[0].app_max_temp) + " &#8457;";

      // Humidity
      document.querySelector(".print_humidity").innerText =
        data.data[0].rh + "%";

      // Wind Speed
      document.querySelector(".print_wind").innerText =
        data.data[0].wind_gust_spd + "m/s";

      // WEATHER FORECAST
      const getUl = document.querySelector("ul");
      getUl.innerHTML = ""; // Allows to reset if user searches for a new location
      for (let i = 0; i < data.data.length; i++) {
        const printDay = new Date(data.data[i].datetime);
        const time = printDay.getDay();
        getUl.innerHTML += `<li class="weather_print">
                            <div class="weather_contents">
                                <img src=https://www.weatherbit.io/static/img/icons/${
                                  data.data[i].weather.icon
                                }.png alt="" class="forecast_img" />
                                    <span class="weather_temp">${
                                      Math.round(data.data[i].max_temp) +
                                      "&#8457;"
                                    }</span>
                            </div>
                            <div class="weather_float">
                                <span class="weather_time">${days[time]}</span>
                                <span class="weather_day">${
                                  data.data[i].datetime
                                }</span>
                            </div>
                            </li>
                            </ul>`;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
