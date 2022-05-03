//To Do: Create an application that will deploy local breweries and reviews
//Get html elements and make into variables
var searchButton = document.getElementById("search-button")
var searchBarEl = document.getElementById("search-bar")

var breweryDisplayEL = document.getElementById("breweries")
var listItemEl = document.getElementById('list')
var weatherEl = document.querySelector("weather")
const apiKey = "82d466c6476a45fdadcc1da99e41ba61"

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
            // Create a list element
            var listItem = document.createElement('li');
            //set text of li into json response
            listItem.textContent = data[i].name;
            //append the li to the id
            listItemEl.appendChild(listItem);
    }
    console.log(data[i].name);
});
}

//create a function to fetch the open weather api
var getWeather = function(){
    var cityName = searchBarEl.value
    console.log(cityName)
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    
    .then(function(response){
        response.json().then(function(data){
            console.log(data)
           display5Day(data);
        });
    });
};

var display5Day = function(){
    weatherEl.textContent = ""

    var forecast = weather.list;
        for(var i=5; i < forecast.length; i++){
       var dailyForecast = forecast[i];
        

       console.log(dailyForecast)

       //set date element
       var forecastDate = document.createElement("h5")
       forecastDate.textContent= moment.unix(dailyForecast.dt).format("MMM DD, YYYY");
       forecastDate.classList = "card-header text-center"
       forecastEl.appendChild(forecastDate);
       
       //set temperature span
       var forecastTempEl=document.createElement("span");
       forecastTempEl.classList = "card-body text-center";
       forecastTempEl.textContent = dailyForecast.main.temp + " °F";

        //append to forecast card
        forecastEl.appendChild(forecastTempEl);

        // console.log(forecastEl);
       //append to five day container
        weatherEl.appendChild(forecastEl);
    }

}

function doBoth() {
   // event.preventDefault()
    getBreweryName()
    getWeather()
}
   
searchButton.addEventListener("click", doBoth);