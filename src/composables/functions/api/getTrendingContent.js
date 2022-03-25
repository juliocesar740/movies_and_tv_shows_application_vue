import axios from "axios";

// Get the trending movies and tv shows
async function getTrendingContent(key) {
  try {
    const request = await axios(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US&page=1&adult=false`
    );

    const data = request.data;
    const trending_movies_and_series = data.results;

    return trending_movies_and_series;
  } catch (error) {
    console.log(error);
  }
}

export default getTrendingContent;
