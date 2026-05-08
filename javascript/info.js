import { TMDB_API_KEY } from "./config.js";

const params = new URLSearchParams(window.location.search);
const movieID = params.get("id");
fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${TMDB_API_KEY}`)
  .then((res) => res.json())
  .then((movie) => {
    renderInfo(movie);
  })
  .catch((err) => console.log(err));
fetch(
  `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${TMDB_API_KEY}`,
)
  .then((res) => res.json())
  .then((res) => {
    renderRelatedMovies(res.results.slice(0, 5));
  })
  .catch((err) => console.log(err));
fetch(
  `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${TMDB_API_KEY}`,
)
  .then((res) => res.json())
  .then((credits) => {
    renderCasts(credits.cast.slice(0, 5));
  })
  .catch((err) => console.log(err));

function renderInfo(movie) {
  console.log(movie);
  const movieTag = document.getElementById("info-container");
  const poster = document.querySelector(".poster img");
  const html = `<button id="watch-btn">
          <i class="fa fa-regular fa-circle-play"></i> Watch now
        </button>
        <h1>${movie.title}</h1>
        <p>
          ${movie.overview}
        </p>
        <p id="release-date">Release date: ${movie.release_date}</p>
        <div class="tag-container">
          ${movie.genres
            .map((genre) => {
              return `<span class="tag">${genre.name}</span>`;
            })
            .join("")}
        </div>`;
  poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  movieTag.innerHTML = html;
}
function renderRelatedMovies(movies) {
  const movieTag = document.getElementById("related-movies");
  let html = "";
  movies.forEach((movie) => {
    html += `
      <a href="info.html?id=${movie.id}" class="movie-link">
        <div class="movie-card">
          <div class="img-container img-container-5">
            <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              alt="${movie.title}" />
          </div>

          <h3>${movie.title}</h3>
        </div>
      </a>
    `;
  });

  movieTag.innerHTML = html;
}
function renderCasts(casts) {
  const castsTag = document.getElementById("casts");
  let html = "";
  casts.forEach((cast) => {
    html += `
        <div class="movie-card">
          <div class="img-container img-container-5">
            <img
              src="https://image.tmdb.org/t/p/w500${cast.profile_path}"
              alt="${cast.name}" />
          </div>

          <h3>${cast.name}</h3>
          <h3 id="character-name">${cast.character}</h3>
        </div>
    `;
  });
  castsTag.innerHTML = html;
}
