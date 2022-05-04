//To Do: Create an application that will deploy local breweries and reviews
//Get html elements and make into variables
var searchButton = document.getElementById("search-button")
var searchBarEl = document.getElementById("search-bar")

var breweryDisplayEL = document.getElementById("breweries")
var listItemEl = document.getElementById('list')
var weatherEl = document.getElementById("weather")


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

var cityName = searchBarEl.value
const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com',
		'X-RapidAPI-Key': '44b122c511msh974f761987c7d71p158a01jsna426c9134bcd'
	}
};
function getRestaurant(){
    var restaurantCity = searchBarEl.value
fetch(`https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${restaurantCity}&type=restaurant&radius=80&language=en&per_page10`, options)
	.then(function(response) {
        return response.json();
   })
   .then(function(data) {
       for (var i = 0; i < data.length ; i++) {
        console.log(data[i]);
    }
})
};


function doBoth() {
   //preventDefault()
    getBreweryName()
    getRestaurant()
}

searchButton.addEventListener("click", doBoth);
