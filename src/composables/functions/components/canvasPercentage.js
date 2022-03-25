// draws the rate percentage circle
function canvasPercentage(score, score_result) {
  const canvas = score;
  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 9;
  ctx.strokeStyle = "rgb(15, 155, 85)";

  ctx.beginPath();
  ctx.arc(30, 30, 30, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = "rgba(14, 247, 130, 0.973)";

  ctx.beginPath();
  ctx.arc(
    30,
    30,
    30,
    0,
    ((Number(score_result.textContent) * 2) / 100) * Math.PI
  );
  ctx.stroke();
  ctx.closePath();
}

export default canvasPercentage;
