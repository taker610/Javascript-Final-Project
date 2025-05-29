const key = '60f86102'
const url = "http://www.omdbapi.com/?apikey=&"
const movieList = document.querySelector('.search__results')

function searchMovie(event) {
    const param = event.target.value
    getMovies(param)
}

async function getMovies(param) {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${param}`)
    const moviesData = await movies.json()
    console.log(moviesData)
    movieList.innerHTML = moviesData.map(movie => showMovieHTML(movie)).join("")
}

function showMovieHTML(movie) {
    return `<div class="movie__card">
                <div class="movie__card--container">
                    <feature>
                        <img src="${movie.poster}" alt="${movie.title}" />
                    </feature>
                    <h3>Title: ${movie.title}</h3>
                    <p>Year: ${movie.year}</p>
                </div>
            </div>`
}




