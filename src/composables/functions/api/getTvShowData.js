import axios from "axios";

// Get the tv show data
async function getTvShowData(tvShowId, key) {
  try {
    let tvShowData = {};
    const request = await axios(
      `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${key}&language=en-US`
    );
    tvShowData = request.data;

    return tvShowData;
  } catch (error) {
    console.log(error);
  }
}

export default getTvShowData;
