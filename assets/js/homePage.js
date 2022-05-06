var searchButton = document.getElementById("search-button");
var searchBarEl = document.getElementById("search-bar");
var homeSearchButton = document.getElementById("home-search-button");

// searchBarEl.addEventListener('click', function(){
//     var city = searchbarEL.value.trim();
//     window.open('pagetwo.html?city='+ city, '_self');
//     console.log(city)
// });

function getParameterByName () {
    debugger
    var city = searchBarEl.value
    var searchWork = document.location.search
    console.log(searchWork);
    var cityName = city.value;
    cityName = searchWork.replace(/\+/g, ' ');
    city = cityName.split('=')[1]
    // var searchResult
    console.log (city);
    doBoth(city)
}


    // window.open('pagetwo.html?city='+ city, '_self');
//     getBreweryName(city);
//     getWeather(city);


// homeSearchButton.addEventListener('submit', getParameterByName)