const redCandle = document.querySelector(".item-red-candle");
const moveableRedCandle = new Moveable(document.body, {
  target: redCandle,
  container: document.body,
  className: "red-candle-control",
  draggable: true,
  resizable: true,
  scalable: true,
  rotatable: true,
  warpable: true,
  pinchable: true,
  origin: true,
  keepRatio: true,
  edge: false,
  throttleDrag: 0,
  throttleResize: 0,
  throttleScale: 0,
  throttleRotate: 0,
});

document.addEventListener("click", (event) => {
  const isOutsideClick =
    !redCandle.contains(event.target) && // Click is outside the target
    !event.target.closest(".red-candle-control"); // Click is outside Moveable's control box

  if (isOutsideClick) {
    document.querySelector(".red-candle-control").style.display = "none";
  } else {
    document.querySelector(".red-candle-control").style.display = "block";
  }
});

/* draggable */
moveableRedCandle.on("drag", ({ target, left, top }) => {
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  document.querySelector(".red-candle-control").style.display = "block";
});

/* resizable */
moveableRedCandle.on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
  delta[0] && (target.style.width = `${width}px`);
  delta[1] && (target.style.height = `${height}px`);
});

/* scalable */
moveableRedCandle.on("scale", ({ target, scale, dist, delta, transform, clientX, clientY }) => {
  target.style.transform = transform;
});

/* rotatable */
moveableRedCandle.on(
  "rotate",
  ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
    target.style.transform = transform;
  }
);

/* warpable */
this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
moveableRedCandle.on("warp", ({ target, clientX, clientY, delta, dist, multiply, transform }) => {
  this.matrix = multiply(this.matrix, delta);
  target.style.transform = `matrix3d(${this.matrix.join(",")})`;
});

const greenCandle = document.querySelector(".item-green-candle");
const moveableGreenCandle = new Moveable(document.body, {
  target: greenCandle,
  container: document.body,
  className: "green-candle-control",
  draggable: true,
  resizable: true,
  scalable: true,
  rotatable: true,
  warpable: true,
  pinchable: true,
  origin: true,
  keepRatio: true,
  edge: false,
  throttleDrag: 0,
  throttleResize: 0,
  throttleScale: 0,
  throttleRotate: 0,
});

document.addEventListener("click", (event) => {
  const isOutsideClick =
    !greenCandle.contains(event.target) && // Click is outside the target
    !event.target.closest(".green-candle-control"); // Click is outside Moveable's control box

  if (isOutsideClick) {
    document.querySelector(".green-candle-control").style.display = "none";
  } else {
    document.querySelector(".green-candle-control").style.display = "block";
  }
});

/* draggable */
moveableGreenCandle.on("drag", ({ target, left, top }) => {
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  document.querySelector(".green-candle-control").style.display = "block";
});

/* resizable */
moveableGreenCandle.on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
  delta[0] && (target.style.width = `${width}px`);
  delta[1] && (target.style.height = `${height}px`);
});

/* scalable */
moveableGreenCandle.on("scale", ({ target, scale, dist, delta, transform, clientX, clientY }) => {
  target.style.transform = transform;
});

/* rotatable */
moveableGreenCandle.on(
  "rotate",
  ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
    target.style.transform = transform;
  }
);

/* warpable */
this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
moveableGreenCandle.on("warp", ({ target, clientX, clientY, delta, dist, multiply, transform }) => {
  this.matrix = multiply(this.matrix, delta);
  target.style.transform = `matrix3d(${this.matrix.join(",")})`;
});

const headFront = document.querySelector(".item-head-front");
const moveableHeadFront = new Moveable(document.body, {
  target: headFront,
  container: document.body,
  className: "head-front-control",
  draggable: true,
  resizable: true,
  scalable: true,
  rotatable: true,
  warpable: true,
  pinchable: true,
  origin: true,
  keepRatio: true,
  edge: false,
  throttleDrag: 0,
  throttleResize: 0,
  throttleScale: 0,
  throttleRotate: 0,
});

document.addEventListener("click", (event) => {
  const isOutsideClick =
    !redCandle.contains(event.target) && // Click is outside the target
    !event.target.closest(".head-front-control"); // Click is outside Moveable's control box

  if (isOutsideClick) {
    document.querySelector(".head-front-control").style.display = "none";
  } else {
    document.querySelector(".head-front-control").style.display = "block";
  }
});

/* draggable */
moveableHeadFront.on("drag", ({ target, left, top }) => {
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  document.querySelector(".head-front-control").style.display = "block";
});

/* resizable */
moveableHeadFront.on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
  delta[0] && (target.style.width = `${width}px`);
  delta[1] && (target.style.height = `${height}px`);
});

/* scalable */
moveableHeadFront.on("scale", ({ target, scale, dist, delta, transform, clientX, clientY }) => {
  target.style.transform = transform;
});

/* rotatable */
moveableHeadFront.on(
  "rotate",
  ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
    target.style.transform = transform;
  }
);

/* warpable */
this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
moveableHeadFront.on("warp", ({ target, clientX, clientY, delta, dist, multiply, transform }) => {
  this.matrix = multiply(this.matrix, delta);
  target.style.transform = `matrix3d(${this.matrix.join(",")})`;
});

const headSide = document.querySelector(".item-head-side");
const moveableHeadSide = new Moveable(document.body, {
  target: headSide,
  container: document.body,
  className: "head-side-control",
  draggable: true,
  resizable: true,
  scalable: true,
  rotatable: true,
  warpable: true,
  pinchable: true,
  origin: true,
  keepRatio: true,
  edge: false,
  throttleDrag: 0,
  throttleResize: 0,
  throttleScale: 0,
  throttleRotate: 0,
});

document.addEventListener("click", (event) => {
  const isOutsideClick =
    !redCandle.contains(event.target) && // Click is outside the target
    !event.target.closest(".head-side-control"); // Click is outside Moveable's control box

  if (isOutsideClick) {
    document.querySelector(".head-side-control").style.display = "none";
  } else {
    document.querySelector(".head-side-control").style.display = "block";
  }
});

/* draggable */
moveableHeadSide.on("drag", ({ target, left, top }) => {
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  document.querySelector(".head-side-control").style.display = "block";
});

/* resizable */
moveableHeadSide.on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
  delta[0] && (target.style.width = `${width}px`);
  delta[1] && (target.style.height = `${height}px`);
});

/* scalable */
moveableHeadSide.on("scale", ({ target, scale, dist, delta, transform, clientX, clientY }) => {
  target.style.transform = transform;
});

/* rotatable */
moveableHeadSide.on(
  "rotate",
  ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
    target.style.transform = transform;
  }
);

/* warpable */
this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
moveableHeadSide.on("warp", ({ target, clientX, clientY, delta, dist, multiply, transform }) => {
  this.matrix = multiply(this.matrix, delta);
  target.style.transform = `matrix3d(${this.matrix.join(",")})`;
});

const headSideMore = document.querySelector(".item-head-side-more");
const moveableHeadSideMore = new Moveable(document.body, {
  target: headSideMore,
  container: document.body,
  className: "head-side-more-control",
  draggable: true,
  resizable: true,
  scalable: true,
  rotatable: true,
  warpable: true,
  pinchable: true,
  origin: true,
  keepRatio: true,
  edge: false,
  throttleDrag: 0,
  throttleResize: 0,
  throttleScale: 0,
  throttleRotate: 0,
});

document.addEventListener("click", (event) => {
  const isOutsideClick =
    !redCandle.contains(event.target) && // Click is outside the target
    !event.target.closest(".head-side-more-control"); // Click is outside Moveable's control box

  if (isOutsideClick) {
    document.querySelector(".head-side-more-control").style.display = "none";
  } else {
    document.querySelector(".head-side-more-control").style.display = "block";
  }
});

/* draggable */
moveableHeadSideMore.on("drag", ({ target, left, top }) => {
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  document.querySelector(".head-side-more-control").style.display = "block";
});

/* resizable */
moveableHeadSideMore.on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
  delta[0] && (target.style.width = `${width}px`);
  delta[1] && (target.style.height = `${height}px`);
});

/* scalable */
moveableHeadSideMore.on("scale", ({ target, scale, dist, delta, transform, clientX, clientY }) => {
  target.style.transform = transform;
});

/* rotatable */
moveableHeadSideMore.on(
  "rotate",
  ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
    target.style.transform = transform;
  }
);

/* warpable */
this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
moveableHeadSideMore.on(
  "warp",
  ({ target, clientX, clientY, delta, dist, multiply, transform }) => {
    this.matrix = multiply(this.matrix, delta);
    target.style.transform = `matrix3d(${this.matrix.join(",")})`;
  }
);

const headTurned = document.querySelector(".item-head-turned");
const moveableHeadTurned = new Moveable(document.body, {
  target: headTurned,
  container: document.body,
  className: "head-turned-control",
  draggable: true,
  resizable: true,
  scalable: true,
  rotatable: true,
  warpable: true,
  pinchable: true,
  origin: true,
  keepRatio: true,
  edge: false,
  throttleDrag: 0,
  throttleResize: 0,
  throttleScale: 0,
  throttleRotate: 0,
});

document.addEventListener("click", (event) => {
  const isOutsideClick =
    !redCandle.contains(event.target) && // Click is outside the target
    !event.target.closest(".head-turned-control"); // Click is outside Moveable's control box

  if (isOutsideClick) {
    document.querySelector(".head-turned-control").style.display = "none";
  } else {
    document.querySelector(".head-turned-control").style.display = "block";
  }
});

/* draggable */
moveableHeadTurned.on("drag", ({ target, left, top }) => {
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  document.querySelector(".head-turned-control").style.display = "block";
});

/* resizable */
moveableHeadTurned.on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
  delta[0] && (target.style.width = `${width}px`);
  delta[1] && (target.style.height = `${height}px`);
});

/* scalable */
moveableHeadTurned.on("scale", ({ target, scale, dist, delta, transform, clientX, clientY }) => {
  target.style.transform = transform;
});

/* rotatable */
moveableHeadTurned.on(
  "rotate",
  ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
    target.style.transform = transform;
  }
);

/* warpable */
this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
moveableHeadTurned.on("warp", ({ target, clientX, clientY, delta, dist, multiply, transform }) => {
  this.matrix = multiply(this.matrix, delta);
  target.style.transform = `matrix3d(${this.matrix.join(",")})`;
});

const crown = document.querySelector(".item-crown");
const moveableCrown = new Moveable(document.body, {
  target: document.querySelector(".item-crown"),
  container: document.body,
  className: "crown-control",
  draggable: true,
  resizable: true,
  scalable: true,
  rotatable: true,
  warpable: true,
  pinchable: true,
  origin: true,
  keepRatio: true,
  edge: false,
  throttleDrag: 0,
  throttleResize: 0,
  throttleScale: 0,
  throttleRotate: 0,
});

document.addEventListener("click", (event) => {
  const isOutsideClick =
    !redCandle.contains(event.target) && // Click is outside the target
    !event.target.closest(".crown-control"); // Click is outside Moveable's control box

  if (isOutsideClick) {
    document.querySelector(".crown-control").style.display = "none";
  } else {
    document.querySelector(".crown-control").style.display = "block";
  }
});

/* draggable */
moveableCrown.on("drag", ({ target, left, top }) => {
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  document.querySelector(".crown-control").style.display = "block";
});

/* resizable */
moveableCrown.on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
  delta[0] && (target.style.width = `${width}px`);
  delta[1] && (target.style.height = `${height}px`);
});

/* scalable */
moveableCrown.on("scale", ({ target, scale, dist, delta, transform, clientX, clientY }) => {
  target.style.transform = transform;
});

/* rotatable */
moveableCrown.on("rotate", ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
  target.style.transform = transform;
});

/* warpable */
this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
moveableCrown.on("warp", ({ target, clientX, clientY, delta, dist, multiply, transform }) => {
  this.matrix = multiply(this.matrix, delta);
  target.style.transform = `matrix3d(${this.matrix.join(",")})`;
});
