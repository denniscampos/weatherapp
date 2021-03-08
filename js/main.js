document.querySelector('button').addEventListener('click', weatherApp)


function weatherApp() {

let location = document.querySelector('input').value    
// let apiKey = "d378d571a8782ce4c09bd37fac163ff9"
let url = "https://api.openweathermap.org/data/2.5/weather?q="+location +"&units=imperial" +"&appid=d378d571a8782ce4c09bd37fac163ff9"
// onecall API - this is to get the daily weather. Double check the lang and lon
let url2 = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=d378d571a8782ce4c09bd37fac163ff9"


fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // document.querySelector('h2').innerText = data.main.temp
        //City, State, Country or Zip code
        document.querySelector('#city_print').innerText = data.name;
        // Temperatures High and Low
        document.querySelector('.high_temp').innerText = Math.round(data.main.temp_max) + " F"
        document.querySelector('.low_temp').innerText = Math.round(data.main.temp_min) + " F"

        // we have a feels liek data ex. data.main.feels_like
        //check temperature
        document.querySelector('#tempCheck').innerHTML = Math.round(data.main.temp) + " F"
        // check feels like
        document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like) + " F"
        // check humidity 
        document.querySelector('#humidity').innerHTML = data.main.humidity + " %"
        // check wind
        document.querySelector('#windSpeed').innerText = data.wind.speed + " MPH"
        // check description
        document.querySelector('#weatherDescription').innerHTML = data.weather[0].description.toUpperCase()
        // print weather pic
        const weatherPic = data.weather[0].icon
        document.querySelector('.test1').src = "http://openweathermap.org/img/wn/"+weatherPic +"@2x.png"
        // print weathear when information is first grabbed
        document.querySelector('.temp_pic').src = "http://openweathermap.org/img/wn/"+weatherPic +"@2x.png"
    })
    fetch(url2)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.daily.dt)
            console.log(data.daily[1])
            console.log(data.daily[2])

        })
    .catch(err => {
        console.log(`error ${err}`)
    })

}

// look into weatherbit api






