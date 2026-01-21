import React, { useRef, useEffect } from "react";

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

/** Component for Night Sky Containers */
const NightSky = ({maxStarRadius = 1.25, starSpacing = 30, canvasgrowth = 1.2, radius = '0px', coef = 1}) => {
  const el = useRef();
  const canvas = useRef();

  useEffect(() => {
    const sizes = Math.max(el.current.offsetWidth, el.current.offsetHeight) * canvasgrowth;
    canvas.current.width = sizes;
    canvas.current.height = sizes;
    const backgroundColor = "transparent";
    const ctx = canvas.current.getContext("2d");
    const width = sizes;
    const height = sizes;

    function createStars(width, height, spacing) {
      const stars = [];
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const star = {
            x: x + randomInt(spacing),
            y: y + randomInt(spacing),
            r: Math.random() * maxStarRadius,
          };
          stars.push(star);
        }
      }
      return stars;
    }

    const stars = createStars(width, height, starSpacing);

    function fillCircle(ctx, x, y, r, fillStyle) {
      ctx.beginPath();
      ctx.fillStyle = fillStyle;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    function renderStars() {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      stars.forEach(function (star) {
        const x = star.x;
        const y = star.y;
        const r = star.r;
        fillCircle(ctx, x, y, r, "rgb(255, 255, 255)");
      });
    }
    renderStars();
  }, [canvas, canvasgrowth, maxStarRadius, starSpacing]);

  return (
    <div className="container__night-sky" ref={el}>
      <canvas className="nightSky" ref={canvas} style={{'--circle-speed-coef': coef, borderRadius: radius}}></canvas>
    </div>
  );
};

export default NightSky;
