document.querySelector('button').addEventListener('click', weatherApp)


function weatherApp() {

const location = document.querySelector('input').value    
const apiKey = "5e7a7eade1f8481381997a34477bd35c"
const url = "https://api.weatherbit.io/v2.0/forecast/daily?city="+location +"&units=I" +"&key="+apiKey

fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // Day Variables
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const getDate = new Date(data.data[0].datetime)
        const month = getDate.getUTCMonth() + 1 // to get 12 months
        const date = getDate.getUTCDate()
        const year = getDate.getUTCFullYear()
        const day = getDate.getDay()

        document.querySelector(".todays_day").innerText = days[day]
        document.querySelector(".date_format").innerText = month + "/"+ date + "/" + year
        document.querySelector(".get_location").innerText = data.city_name

        // Current temperature
        document.querySelector('.current_temp').innerText = Math.round(data.data[0].temp) + " F"

        // Feels like -- create an average from max and minx
        document.querySelector('.print').innerText = Math.round(data.data[0].app_max_temp) + " F"

        // Humidity
        document.querySelector(".print_humidity").innerText = data.data[0].rh + "%"

        // Wind Speed
        document.querySelector(".print_wind").innerText = data.data[0].wind_gust_spd + "m/s"

        // WEATHER FORECAST

        // IMG 
        // const printImg = document.querySelectorAll('.forecast_img');

        // for (let i = 0; i < printImg.length; i++) {
        // printImg[i].src = `https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`
        // }

        // ✌🏼
        // https://github.com/anthonylfg

        /**
         * 
         * Step 1
         * 
         *  target the container you need where you want to insert the data (make it a const)
         * 
         */

        // ⬇️ container (ul)
        const weatherInfo = document.querySelector("ul"); // ✅
        

        /**
         * 
         * Step 2
         * 
         *  create a loop to go throught the data of the api (forecast)
         * you can start by just getting the data.data.length (the goal is to make this work then you can adjust to the number of day you want to forecast)
         * 
         */

        // this simply allow you to go throught the all forecast (no need to think about image yet)
        for (let i = 0; i < data.data.length; i++) { // ✅
            /**
             * 
             * Step 3 
             * 
             *  All the code inside the <UL> (container as  weatherInfo const you defined before) need to be wrap inside a <li> so you need to create one
             * then add the css class you want 
             * 
             * Source:
             * https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
             * https://developer.mozilla.org/en-US/docs/Web/API/Element/className
             * https://developer.mozilla.org/fr/docs/Web/API/ParentNode/append (ctrl (for windows)+ click pen link normally)
             * 
             */
            // you definedd an markup li there | can be something like that for img also ? :thinking:
            const getDay = document.createElement('li') // document is kind of a representation off your dom html the "lord of parent"

            // there you need to defined an image markup
            // ...
            // const getImg = document.createElement('img'); 
            // need to check .. not sure to remember why 
            const getImg = document.createElement('img');
            // there you can attach a class to it
            // a dom element come with method inside of it like .className / .append() ... && ... those methods allow you to interact to the dom element selected, it's normal you don't understand all of it you need practice and get used to them because there like 100+ properties attached
            getImg.className = "weather_print"
            // getImg.className = "weather_print" // there for the class
            // there you need to 'append' the image to getDay

            /**
             * 
             *  so it become
             *  <li>
             *    <img class="attachedClassName" />
             * </li>
             */

            /**
             * 
             * Step 4
             * 
             *  Add the data to the img from the API
             *  start by creating an image markup with a class 
             */
            // remember gtImg = <img class="weather_print" />
            // but the src = null or ''
            // so what you want here is to insert the correct datta from the API to the src, you already do this
            // think about the shap of the string / litiral template then replace with a right index
            // this is one day = data.data[0].weather.icon
            // your in a loop alreaady so maybe can you use an index alreaady defined ? :thinking:
            getImg.src = `https://www.weatherbit.io/static/img/icons/${data.data[i].weather.icon}.png` // ✅
            // yes because we are creating "one entity" at a time and not selecting all different html to loop both time 
            /**
             * Step 4.1
             *  Append to li (maake more sense in that order)
             * 
             *  you can start by that as a 'proof of concept` and if you make this work the rest would be the same logic 
             * 
             */
            getDay.append(getImg);

            // Step 5 --> print to html :d
            // think about your maain container (declared somewhere)
            // getDay = li but where belong the li? wheteher print it's a const somewhere
            weatherInfo.append(getDay) // ✅getImg is inside getDay so you need to append the whole stuff inside the container
            // is it working? yes
            /// https://giphy.com/gifs/hero0fwar-karmawhore-rhyming-g9582DNuQppxC
            // yeah same logic but diffrent markup
            // inspect the code / there is no more div around it so it haven't the right class
            /// the goal is to recreate the same architecture

            // to look like that 

            //  <li class="weather_print">
            // 	    <div class="weather_contents">
            // 	        <img src="" alt="" class="forecast_img">
            // 	        <span class="weather_temp">70 F</span> 
            // 	    </div>
            // 	    <div class="weather_float">
            // 	    <span class="weather_time">timeStamp</span> 
            // 	    <span class="weather_day">currentDay</span>
            // 	    </div>
            // </li>

            // there is way to create markup as following
            // div = htmlToElement('<div><span>nested</span> <span>stuff</span></div>');
            // so you can end up with
            // htmlToElement(`
            //  <li class="weather_print">
            //  	    <div class="weather_contents">
            //  	        <img src="${placingTheGoodData}" alt="" class="forecast_img">
            //  	        <span class="weather_temp">70 F</span> 
            //  	    </div>
            //  	    <div class="weather_float">
            //  	    <span class="weather_time">timeStamp</span> 
            //  	    <span class="weather_day">currentDay</span>
            //  	    </div>
            //  </li>
            // `)

            // append all the block code as one
            // to avoid create each element and append one by one 
            // it's up to you

            // BUT
            // as beginner dry (don't reapeat yourself) code is not the first goal, it's better to havee repetittion so it's get insidee your heaad and then when you get wild and confortable with the code come back to your project can be 2 months ahead and try to refactor
            
            // it's always a lot of informations at first but after is paradise ;)
            // note that JS dom maanipulation (animtion)(vnaillajs)(interaaction)
            // is waay different that JS for function purpose
            // because you need to know more stuff about interact with DOM aand so on
            // pure JS can only be functionnaal purpose

            const add = (a, b) => a + b;
            // more simple than targeting and interacting with dom ;p

            // but with js you cna do stuff likee that :) 
            // https://lisafises.com/ (hope it's still working I haven't check this for a wild)
            // all data and animations are maanaged by js
            // it's private code source but I cna share to you at some point if you want to leaarn some but it waas when I was still aat school so

            // have some exercises 'real world" that we caan think about if you want so you cna become more confortable
        }




























        // const weatherPic = data.data[0].weather.icon
        // document.querySelector('.forecast_img').src = "https://www.weatherbit.io/static/img/icons/"+weatherPic +".png"

        // // Current Temperature Picture
        // const weatherPic = data.data[0].weather.icon
        // document.querySelector('.temp_pic').src = 

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




