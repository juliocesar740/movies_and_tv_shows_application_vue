import axios from "axios";

// Get the search data
async function getSearchData(type, query, page, key) {
  try {
    const request = await axios(
      `https://api.themoviedb.org/3/search/${type}?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );

    const data = request.data;
    const total_pages = data.total_pages;
    const total_results = data.total_results;
    const results = data.results;

    return { total_pages, total_results, results };
  } catch (error) {
    console.log(error);
  }
}

export default getSearchData;
