const key = '60f86102'
const url = "http://www.omdbapi.com/?apikey=&"
const movieList = document.querySelector('.search__results')
const resultsHeading = document.querySelector('.resultsHeader')
const select = document.querySelector('select')

function searchMovie(event) {
    const param = event.target.value
    getMovies(param)
}

async function getMovies(param) { 
    movies = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${param}`)
    const moviesData = await movies.json()
    let moviesSliced = moviesData.Search.slice(1,7)
    console.log(moviesSliced)
    movieList.innerHTML = moviesSliced.map(movie => showMovieHTML(movie)).join("")
    resultsHeading.innerHTML = param
}

function showMovieHTML(movie) {
    return `<div class="movie__card">
                <div class="movie__card--container">
                    <feature>
                        <img src="${movie.Poster !== "N/A" ? movie.Poster : './assets/image-regular.svg'}" class="poster"/>
                    </feature>
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            </div>`
}





