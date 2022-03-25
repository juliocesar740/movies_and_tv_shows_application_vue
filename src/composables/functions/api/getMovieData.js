import axios from "axios";

// Get the movie data
async function getMovieData(movieId, key) {
  try {
    let movieData = {};
    const request = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en`
    );

    movieData = request.data;

    return movieData;
  } catch (error) {
    console.log(error);
  }
}

export default getMovieData;
