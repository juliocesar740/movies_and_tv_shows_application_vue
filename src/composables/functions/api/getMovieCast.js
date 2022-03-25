import axios from "axios";

// Get the movie cast
async function getMovieCast(movieId, key) {
  try {
    let cast = [];
    const request = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`
    );
    const data = request.data;
    cast = data.cast.reduce((prev, next, index) => {
      if (index < 9) {
        prev.push(next);
      }
      return prev;
    }, []);

    return cast;
  } catch (error) {
    console.log(error);
  }
}

export default getMovieCast;
