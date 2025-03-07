const globalState = {
  currentPage: window.location.pathname,
  search: {
    term: ' ',
    type: ' ',
    page: 1,
    totalPages: 1,
    totalResults: 0
  },
  api: {
    //this is my key from the TMDB.com public api, if you want you can go and get your own!
    apiKey: 'fabe89ea1d10fdb347cfa088a3e43a57',
    apiUrl: 'https://api.themoviedb.org/3/'
  }
}


//fetch the popular movies from the API
async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = ` 
          <a href="movie-details.html?id=${movie.id}">
            ${movie.poster_path
        ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
        :
        `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
      }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>`;

    document.querySelector('#popular-movies').appendChild(div);
  });
}

//display popular tv shows:
async function displayPopularShows() {
  const { results } = await fetchAPIData('tv/popular');

  results.forEach((show) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = ` 
          <a href="tv-details.html?id=${show.id}">
            ${show.poster_path
        ? `<img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />`
        :
        `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
      }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">Air Date: ${show.first_air_date}</small>
            </p>
          </div>`;

    document.querySelector('#popular-shows').appendChild(div);
  });
}

//display shows details
async function displayShowDetails() {
  const showID = window.location.search.split('=')[1];
  const show = await fetchAPIData(`tv/${showID}`);
  //overlay for background image
  displayBackgroundImage('show', show.backdrop_path);

  const div = document.createElement('div');
  div.innerHTML = `<div class="details-top">
          <div>
           ${show.poster_path
      ? `<img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.title}"
            />`
      :
      `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${show.title}"
            />`
    }
          </div>
          <div>
            <h2>Show Name</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${show.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${show.first_air_date}</p>
            <p>
              ${show.overview
                ?
                show.overview
                :
                'We are sorry, but this show does not have a description, please try again later'
              }
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              <li>${show.genres.map((gen) => gen.name).join(', ')}</li>
            </ul>
            <a href="${show.homepage}" target="_blank" class="btn">Visit Show Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Show Info</h2>
          <ul>
            <li>
              <span class="text-secondary">Number Of Seasons:</span>${show.number_of_seasons}
            </li>
            <li>
              <span class="text-secondary">Number Of Episodes:</span>${show.number_of_episodes}
            </li>
            <li>
              <span class="text-secondary">Last Episode To Air:</span>${show.last_episode_to_air.episode_number}
            </li>
            </li>
              <span class="text-secondary">Last Episode Name:</span>${show.last_episode_to_air.name}
            </li>
            <li>
              <span class="text-secondary">Status:</span> ${show.status}
            </li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${show.production_companies.map((company) => company.name).join(', ')}</div>
        </div>`;

        document.querySelector('#show-details').appendChild(div);
}

//desplay movie details:
async function desplayMovieDetails() {
  const movieID = window.location.search.split('=')[1];
  const movie = await fetchAPIData(`movie/${movieID}`);
  console.log(movie);
  console.log(window.location.search);
  displayBackgroundImage('movie', movie.backdrop_path);
  // console.log(movie.production_companies[0].name);

  const div = document.createElement('div');
  div.innerHTML = `<div class="details-top">
          <div>
           ${movie.poster_path
      ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
      :
      `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
    }
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>
            ${movie.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              <li>${movie.genres.map(gen => gen.name).join(', ')}</li>
            </ul>
            <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> ${movie.budget ? addCamasToNumbers(movie.budget) : `Not Available`}</li>
            <li><span class="text-secondary">Revenue:</span> ${movie.revenue ? addCamasToNumbers(movie.revenue) : `Not Available`}</li>
            <li><span class="text-secondary">Runtime:</span> ${movie.runtime} min</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
            <li><span class="text-secondary">Spoken Languages:</span>${movie.spoken_languages.map(lang => lang.english_name).join(' ')}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${movie.production_companies.map(comp => comp.name).join(', ')}</div>
        </div>`;

  document.querySelector('#movie-details').appendChild(div);
}

//adds the spinner element
function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}
function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

//search movies/shows
async function search() {
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);


  globalState.search.type = urlParam.get('type');
  globalState.search.term = urlParam.get('search-term');

  if(globalState.search.term != '' && globalState.search.term != null) {
    const {results, total_pages, page, total_results} = await searchAPIData();

    globalState.search.page = page;
    globalState.search.totalPages = total_pages;
    globalState.search.totalResults = total_results;

    if(results.length === 0) {
      showAlert('No results Found')
      return;
    }

    displaySearchResults(results);

    document.querySelector('#search-term').value = '';


  } else {
    showAlert('Please Enter Search Term', 'error');
  }
}

//function to display the search results
function displaySearchResults (results) {

  //clear previous result;
  document.querySelector('#search-results').innerHTML = '';
  document.querySelector('#search-results-heading').innerHTML = '';
  document.querySelector('#pagination').innerHTML = '';



  results.forEach((result) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = ` 
          <a href="${globalState.search.type}-details.html?id=${result.id}">
            ${result.poster_path
        ? `<img
              src="https://image.tmdb.org/t/p/w500${result.poster_path}"
              class="card-img-top"
              alt="${globalState.search.type === 'movie' ? result.title : result.name}"
            />`
        :
        `<img
              src="images/no-image.jpg" 
              class="card-img-top"
              alt="${globalState.search.type === 'movie' ? result.title : result.name}"
            />`
      }
          </a>
          <div class="card-body">
            <h5 class="card-title">${globalState.search.type === 'movie' ? result.title : result.name}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${globalState.search.type === 'movie' ? result.release_date : result.first_air_date}</small>
            </p>
          </div>`;

    document.querySelector('#search-results-heading').innerHTML = `
      <h2>${results.length} of ${globalState.search.totalResults} results for ${globalState.search.term}</h2>
    `
    document.querySelector('#search-results').appendChild(div);
  });

  displayPagination();
}

//create and display pagination for search
function displayPagination() {
  const div = document.createElement('div');
  div.classList.add('pagination');
  div.innerHTML = `
    <button class="btn btn-primary" id="prev">Prev</button>
    <button class="btn btn-primary" id="next">Next</button>
    <div class="page-counter">${globalState.search.page} of ${globalState.search.totalPages}</div>
          `;
  document.querySelector('#pagination').appendChild(div);

  //disable previous and next buttons on first and last page

  if (globalState.search.page === 1) {
    document.querySelector('#prev').disabled = true;
  } else if (globalState.search.page === globalState.search.totalPages) {
    document.querySelector('#next').disabled = true;
  }

  // next page selection or previous
  document.querySelector('#next').addEventListener('click', async () => {
    globalState.search.page++;
    const {results, totalPages} = await searchAPIData();
    displaySearchResults(results);
  });

  document.querySelector('#prev').addEventListener('click', async () => {
    globalState.search.page--;
    const {results, totalPages} = await searchAPIData();
    displaySearchResults(results);
  })

}


//display Slider Movies
async function displaySlider () {
  const {results} = await fetchAPIData('movie/now_playing');

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add("swiper-slide");

    div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
            ${movie.poster_path
              ? `<img
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                    class="card-img-top"
                    alt="${movie.title}"
                  />`
              :
              `<img
                    src="images/no-image.jpg"
                    class="card-img-top"
                    alt="${movie.title}"
                  />`
            }
            </a>
            <h4 class="swiper-rating">
              <i class="fas fa-star text-secondary"></i> ${movie.vote_average.toFixed(1)}/ 10
            </h4>    
    `;

    document.querySelector('.swiper-wrapper').appendChild(div);


    innitSwiper();
  })
}

//function to init swiper
function innitSwiper () { 
  const swiper = new Swiper ('.swiper', {
    slidesPerView: 1,
    spaceBetween: 3,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    breakpoints: {
      500: {
        slidesPerView: 2
      },
      700: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  })
}

//function backdrop on details page
function displayBackgroundImage (type, backgroundPath) {
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage =  `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.3';

  if (type === 'movie') {
    document.querySelector('#movie-details').appendChild(overlayDiv);
  } else {
    document.querySelector('#show-details').appendChild(overlayDiv);
  }
}

//fetch data from the TMDB API
async function fetchAPIData(endpoint) {

  //this is a key from a public API if you want u can just visit the TMDB.com and just fetch your own!
  const API_KEY = globalState.api.apiKey;
  const API_URL = globalState.api.apiUrl;

  showSpinner();

  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

  const data = await response.json();

  removeSpinner();

  return data;

}

//make request to search:
async function searchAPIData() {



  const API_KEY = globalState.api.apiKey;
  const API_URL = globalState.api.apiUrl;

  showSpinner();

  const response = await fetch(`${API_URL}search/${globalState.search.type}?api_key=${API_KEY}&language=en-US&query=${globalState.search.term}&page=${globalState.search.page}`);
  
  const data = await response.json();

  removeSpinner();

  return data;

}


//highlights the active links
function highlightLinks() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
}

//show Alert:
function showAlert (message, className = 'error') {
  const alertEl = document.createElement('div');
  alertEl.classList.add('alert', className);
  alertEl.appendChild(document.createTextNode(message));
  document.querySelector('#alert').appendChild(alertEl);


  setTimeout(() => {
    alertEl.remove()
  }, 2000);
}

//a function that adds points or commas to fetched non splited numbers:
function addCamasToNumbers(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//swutch function to act as a router
function innit() {
  switch (globalState.currentPage) {
    case '/11-flix-app-project/flixx-app/index.html':
      displayPopularMovies();
      displaySlider();
      break;

    case '/11-flix-app-project/flixx-app/shows.html':
      displayPopularShows();
      break;

    case '/11-flix-app-project/flixx-app/tv-details.html':
      displayShowDetails();
      break;

    case '/11-flix-app-project/flixx-app/movie-details.html':
      desplayMovieDetails();
      break;

    case '/11-flix-app-project/flixx-app/search.html':
      search();
      break;
  }

  highlightLinks();
}

document.addEventListener('DOMContentLoaded', innit);