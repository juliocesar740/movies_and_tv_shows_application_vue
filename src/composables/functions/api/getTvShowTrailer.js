import axios from "axios";

// Get the tv show trailer
async function getTvShowTrailer(movieId, key) {
  try {
    let official_trailer_id = 0;

    const request = await axios(
      `https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${key}&language=en-US`
    );

    const data = request.data;

    const results = data.results.reduce((prev, next) => {
      if (next.name.indexOf("Trailer") !== -1) {
        prev.push(next);
      }

      return prev;
    }, []);

    results.sort((a, b) => {
      const x = new Date(
        Number(a.published_at.split("-")[0]),
        Number(a.published_at.split("-")[1]),
        Number(a.published_at.split("-")[1].split(":")[0])
      );

      const y = new Date(
        Number(b.published_at.split("-")[0]),
        Number(b.published_at.split("-")[1]),
        Number(b.published_at.split("-")[1].split(":")[0])
      );

      return x - y;
    });
    if (!results.length) {
      return "undefined";
    }
    official_trailer_id = results[0].key;
    return official_trailer_id;
  } catch (error) {
    console.log(error);
  }
}

export default getTvShowTrailer;
