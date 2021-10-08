let apiKey = '&api_key=lFU5lZaOxgaEsTnpbIzchikKlHaAxmpV';
let apiSearchURL;
let searchTerm = document.getElementById('search');
let search = document.querySelector('.form');
search.addEventListener('submit', searchResult);
let trending = document.getElementById('trending-button');
trending.addEventListener('click', trendingResult);
let trendingURL = `https://api.giphy.com/v1/gifs/trending?${apiKey}&limit=30`;
let randomURL = `https://api.giphy.com/v1/gifs/random?${apiKey}&tag=hannibal+lecter`

function randomResult() {

    fetch(randomURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let data = json.data
            console.log(data)

            let img = document.createElement('img');
            img.src = (data.images.downsized.url);
            document.getElementById('results').appendChild(img);


        })
        .catch(error => console.log(error))
}

randomResult();
// This function will return images with the search term entered by user
function searchResult(e) {
    e.preventDefault()
    console.log(searchTerm.value);
    console.log('hello');
    apiSearchURL = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${searchTerm.value}&limit=20`;
    fetch(apiSearchURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let data = json.data
            console.log(data);
            getImages(data);


        })
        .catch(error => console.log(error))
}

// Map over data, create new element inside of html and append to
function getImages(data) {
    console.log(data);
    data.map(giph => {
        console.log(giph.images.downsized.url)
        let img = document.createElement('img');
        img.src = (giph.images.downsized.url)
        document.getElementById('results').appendChild(img)

    });

}

// Fetch 'trending' endpoint from api and return images and display html
function trendingResult() {

    fetch(trendingURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let data = json.data


            getImages(data);
        })
        .catch(error => console.log(error))
}

// Map over data, create new element inside of html and append to
function getImages(data) {
    console.log(data);
    data.map(giph => {
        console.log(giph.images.downsized.url)
        let img = document.createElement('img');
        img.src = (giph.images.downsized.url)
        document.getElementById('results').appendChild(img)

    });

}