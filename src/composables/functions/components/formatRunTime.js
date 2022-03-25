// format time
function formatRunTime(runtime) {
  if (runtime < 60) {
    return runtime;
  }

  let hours = 0;
  let minutes = 0;

  while (runtime !== 0) {
    if (runtime - 60 >= 0) {
      hours += 1;
      runtime -= 60;
    } else {
      minutes += runtime;
      runtime = 0;
    }
  }

  return `${hours + "h"} ${minutes ? minutes + "min" : ""}`;
}

export default formatRunTime;
