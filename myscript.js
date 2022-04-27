//To Do: Create an application that will deploy local breweries and reviews

//Get html elements and make into variables

//create a function to fetch the brewery api
function getBreweryName(event) {
    var cityName = event.target.value || //cityName.value
    console.log(event.target.value)
    var getBreweryUrl = `https://api.openbrewerydb.org/breweries?by_city`
    fetch(getBreweryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayBreweries(data)
        })
}

//Create elements to display the brewery then put in the data and then append 
function displayBreweries(data) {
    weatherEl.innerHTML = ""

    var header = document.createElement('h5')
    //breweryEl.append(header)
}

//create function to fetch yelp api 

//Create one function to call both brewery and yelp functions at the same time