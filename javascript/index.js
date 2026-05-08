import { TMDB_API_KEY } from "./config.js";

const options = { method: "GET", headers: { accept: "application/json" } };

fetch(
  `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${TMDB_API_KEY}`,
  options,
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    renderMovies(res.results.slice(0, 4), "top_rated");
  })
  .catch((err) => console.error(err));
fetch(
  `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${TMDB_API_KEY}`,
  options,
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    renderMovies(res.results.slice(0, 4), "popular");
  })
  .catch((err) => console.error(err));
fetch(
  `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${TMDB_API_KEY}`,
  options,
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    renderMovies(res.results.slice(0, 4), "upcoming");
  })
  .catch((err) => console.error(err));
function renderMovies(data, id) {
  const moviesTag = document.getElementById(id);
  let html = "";
  data.forEach((movie) => {
    html += `
    <a href="./info.html?id=${movie.id}">
      <div class="movie-card">
        <div class="img-container img-container-4">
          <img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            alt="${movie.title}" />
        </div>

            <h3>${movie.title}</h3>
          </div>
        </a>`;
    moviesTag.innerHTML = html;
  });
}
