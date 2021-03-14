

// const getDiv = document.createElement('div'); 
// const getUl = document.createElement('ul'); 
// const getLi = document.createElement('li'); 
// getLi.className = 'get_paragraph'
// getUl.append(getLi)
// getDiv.append(getUl)

// console.log(getDiv);

/* <ul>
        <li class="weather_print">
          <div class="weather_contents">
            <img src="" alt="" class="forecast_img" />
            <span class="weather_temp">70 F</span>
          </div>
          <div class="weather_float">
            <span class="weather_time">timeStamp</span>
            <span class="weather_day">currentDay</span>
          </div>
        </li>
      </ul> */

      // create UL
      // create LI 
      // create Div (weather_contents)
      // create span (weather_temp)
      // create div (weather_float)
      // create span (weather_time)
      // create span (weather_day)


// const getUl = document.createElement('ul');
// const getLi = document.createElement('li');
// const getDiv = document.createElement('div');
// const span = document.createElement('span')
// getDiv.className = "weather_contents"
// span.className = "weather_temp"
// getDiv.className = "weather_float"
// span.ClassName = "weather_time"
// span.ClassName = "weather_day"
// getUl.append(getLi)
// getUl.append(getDiv)
// getUl.append(span)


// console.log(getDiv);


// // <div id="some-element">...</div>
// var elem = document.querySelector('div');

// // Get the current markup
// var html = elem.innerHTML;

// // Replace the current markup
// elem.innerHTML = '<p>Some new content.</p>';

// // Add content before the current markup
// elem.innerHTML = '<p>Some new content.</p>' + elem.innerHTML;

// // Add content after the current markup
// elem.innerHTML += '<p>Some new content.</p>';

// console.log(elem)

const testAgain = document.querySelector('ul'); 
// const getTemperature = testAgain.innerHTML; 

testAgain.innerHTML = 
`<li class="weather_print">
  <div class="weather_contents">
    <img src="${data.data[i].temp}" alt="" class="forecast_img" />
    <span class="weather_temp">70 F</span>
  </div>
  <div class="weather_float">
    <span class="weather_time">timeStamp</span>
    <span class="weather_day">currentDay</span>
  </div>
</li>
</ul>`

console.log(testAgain)