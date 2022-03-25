import axios from "axios";

// Get the movies that are now playing
async function getMoviesPlaying(key) {
  try {
    const request = await axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
    );

    const data = request.data;
    let moviesPlaying = data.results;

    moviesPlaying.sort((a, b) => b.vote_average - a.vote_average);

    moviesPlaying = moviesPlaying.splice(0, 6);

    return moviesPlaying;
  } catch (error) {
    console.log(error);
  }
}

export default getMoviesPlaying;
