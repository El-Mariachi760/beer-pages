//To Do: Create an application that will deploy local breweries and weather

//Get html elements and make into variables
var searchButton = document.querySelector(".home-search-button");
var searchBarTwoEl = document.querySelector(".search-bar-two");
//var homeSearchButton = document.getElementById("home-search-button");
var searchBarEl = document.getElementById("search-bar");
//var homeSearchBar = document.getElementById("home-search-bar");


var breweryDisplayEL = document.getElementById("breweries");
var listItemEl = document.getElementById('list');
var nameEl = document.getElementById('city');
var tempEl = document.getElementById('temp');
var descEl = document.getElementById('desc');
var weatherEl = document.querySelector("weather");
const apiKey = "82d466c6476a45fdadcc1da99e41ba61";


//create a function to fetch the brewery api
function getBreweryName() {
    //debugger;
    //console.log(homeSearchBar.value)
    console.log(searchBarTwoEl.value)
    var cityName = searchBarTwoEl.value //| homeSearchBar.value
    //console.log(cityName)
    var getBreweryUrl = `https://api.openbrewerydb.org/breweries?by_city=${cityName}`
    
    fetch(getBreweryUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (var i = 0; i < 9; i++) {

            // Create a list element+
            var listItem = document.createElement('li');
            // add class to 'li' element
            listItem.className = "beer-coaster"
            // create unique Ids for list items
           // listItem.id = 'list' + listItemCounter++;
            // to add a div and provide innerhtml with search results
            var listItemResult = document.createElement('div')
            //set text of li into json response
            listItemResult.innerHTML = "<h3>" + data[i].name + "</h3>";
            //append the li to the id
            //console.log(listItemEl)
            listItemEl.appendChild(listItem);
            listItem.appendChild(listItemResult);
    }
    console.log(data[i]);
});
}

//create a function to fetch the open weather api
var getWeather = function(){
    var cityName = searchBarTwoEl.value
    console.log(cityName)
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${cityName}&appid=${apiKey}`

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

function doBoth() { 
    getBreweryName()
    getWeather()
    
}

searchButton.addEventListener('click', doBoth)



var clear = document.querySelector("#clearCities");
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});



