//To Do: Create an application that will deploy local breweries and reviews
//Get html elements and make into variables
var searchButton = document.getElementById("search-button");
var searchBarEl = document.getElementById("search-bar");

var breweryDisplayEL = document.getElementById("breweries");
var listItemEl = document.getElementById('list');
var nameEl = document.getElementById('city');
var tempEl = document.getElementById('temp');
var descEl = document.getElementById('desc');
var weatherEl = document.querySelector("weather");
const apiKey = "82d466c6476a45fdadcc1da99e41ba61";

// varable to add unique id to each list item
var listItemCounter = 0;
//create a function to fetch the brewery api
function getBreweryName() {
    var cityName = searchBarEl.value
    console.log(cityName)
    var getBreweryUrl = `https://api.openbrewerydb.org/breweries?by_city=${cityName}`

    fetch(getBreweryUrl)
    .then(function(response) {
         return response.json();
    })
    .then(function(data) {
        for (var i = 0; i < 5; i++) {
            // Create a list element+
            var listItem = document.createElement('li');
            // add class to 'li' element
            listItem.className = "beer-coaster"
            // create unique Ids for list items
            listItem.id = 'list' + listItemCounter++;
            // to add a div and provide innerhtml with search results
            var listItemResult = document.createElement('div')
            //set text of li into json response
            listItemResult.innerHTML = "<h3>" + data[i].name; + "</h3>";
            //append the li to the id
            listItemEl.appendChild(listItem);
            listItem.appendChild(listItemResult);
    }
    console.log(data[i]);
});
}

//create a function to fetch the open weather api
var getWeather = function(){
    var cityName = searchBarEl.value
    console.log(cityName)
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    console.log(apiURL)
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description']
        city.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        
        console.log(data.name)
    })

};
    
//     .then(function(response){
//         response.json().then(function(data){
//             console.log(data)
//            display5Day(data);
//         });
//     });
// };
// var display5Day = function(){
//     debugger
//     var forecast = weatherEl.list;
//     for(var i=5; i < forecast.length; i++){
//         var dailyForecast = forecast[i];
        
        
//         console.log(dailyForecast)
        
//         //set date element
//         var forecastDate = document.createElement("h5")
//         forecastDate.textContent= moment.unix(dailyForecast.dt).format("MMM DD, YYYY");
//         forecastDate.classList = "card-header text-center"
//         forecastEl.appendChild(forecastDate);
        
//         //set temperature span
//         var forecastTempEl=document.createElement("span");
//         forecastTempEl.classList = "card-body text-center";
//         forecastTempEl.textContent = dailyForecast.main.temp + " °F";
        
//         //append to forecast card
//         forecastEl.appendChild(forecastTempEl);
        
//         // console.log(forecastEl);
//         //append to five day container
//         weatherEl.appendChild(forecastEl);
//         weatherEl.textContent = ""
//     }

// }




function doBoth() {
   //preventDefault()
    getBreweryName()
    getWeather()
}

searchButton.addEventListener("click", doBoth);
