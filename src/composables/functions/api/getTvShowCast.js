import axios from "axios";

// Get the tv show cast
async function getTvShowCast(tvShowId, key) {
  try {
    let cast = [];
    const request = await axios(
      `https://api.themoviedb.org/3/tv/${tvShowId}/credits?api_key=${key}&language=en-US`
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

export default getTvShowCast;
