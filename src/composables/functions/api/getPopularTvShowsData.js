import axios from "axios";

// Get the popular tv shows data
async function getPopularTvShowsData(page, key) {
  try {
    const request = await axios(
      `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=${page}&adult=false`
    );

    const data = request.data;
    const total_pages = data.total_pages;
    const popularTvShows = data.results;

    return { total_pages, popularTvShows };
  } catch (error) {
    console.log(error);
  }
}

export default getPopularTvShowsData;
