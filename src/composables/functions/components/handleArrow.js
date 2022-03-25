// Handles the arrow actions
function handleArrow(array_variables) {
  // go the previous index
  if (array_variables.direction === "left") {
    array_variables.numberOfClicks.value++;
    // handles constatly repeated clicks
    if (array_variables.numberOfClicks.value > 1) {
      return -1;
    }
    setTimeout(() => {
      array_variables.position.value--;
      // if the current index is 0 go to the last index
      if (array_variables.position.value === -1) {
        array_variables.position.value = array_variables.last_position.value;
      }
      array_variables.numberOfClicks.value = 0;

      // animation
      array_variables.carousel_component.value.$refs.movie_carossel.classList.add(
        "movie-carossel-active"
      );
    }, 750);
  } else {
    // go the next index
    array_variables.numberOfClicks.value++;
    // handles constatly repeated clicks
    if (array_variables.numberOfClicks.value > 1) {
      return -1;
    }
    setTimeout(() => {
      array_variables.position.value++;
      // if the current index is last go to the first index
      if (
        array_variables.position.value ===
        array_variables.last_position.value + 1
      ) {
        array_variables.position.value = 0;
      }
      array_variables.numberOfClicks.value = 0;
      // animation
      array_variables.carousel_component.value.$refs.movie_carossel.classList.add(
        "movie-carossel-active"
      );
    }, 750);
  }
}

export default handleArrow;
