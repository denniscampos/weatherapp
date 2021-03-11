document.querySelector('button').addEventListener('click', weatherApp)


function weatherApp() {

let location = document.querySelector('input').value    
let apiKey = "5e7a7eade1f8481381997a34477bd35c"
let url = "https://api.weatherbit.io/v2.0/forecast/daily?city="+location +"&units=I" +"&key="+apiKey

fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // // // document.querySelector('h2').innerText = data.main.temp

        // //City, State, Country or Zip code
        // document.querySelector('#city_print').innerText = data.city_name;

        // Current temperature
        document.querySelector('.current_temp').innerText = Math.round(data.data[0].temp) + " F"

        // Feels like -- create an average from max and minx
        document.querySelector('.print').innerText = Math.round(data.data[0].app_max_temp) + " F"

        // // Current Temperature Picture
        // const weatherPic = data.data[0].weather.icon
        // document.querySelector('.temp_pic').src = "https://www.weatherbit.io/static/img/icons/"+weatherPic +".png"

        // // // Temperatures High and Low
        // document.querySelector('.high_temp').innerText = Math.round(data.data[0].high_temp) + " F"
        // document.querySelector('.low_temp').innerText = Math.round(data.data[0].low_temp) + " F"


        // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        // const weeks = document.querySelector('.daily_temps');
        // for (let i = 0; i < 6; i++) {
        //     const testDay = data.data[i].datetime
        //     const daysNum = new Date(testDay).getDay()
        //     let myDiv = document.createElement('div')
        //     myDiv.innerHTML = days[daysNum]
        //     weeks.append(myDiv)
        // }

    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}




