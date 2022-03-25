import axios from "axios";

// Get the popular movies data
async function getPopularMoviesData(page, key) {
  try {
    const request = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}&adult=false`
    );

    const data = request.data;
    const total_pages = data.total_pages;
    const popularMovies = data.results;

    return { total_pages, popularMovies };
  } catch (error) {
    console.log(error);
  }
}

export default getPopularMoviesData;
