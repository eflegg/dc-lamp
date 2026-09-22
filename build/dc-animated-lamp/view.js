/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/dc-animated-lamp/view.js ***!
  \**************************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log('Hello World! (from create-block-dc-animated-lamp block)');
/* eslint-enable no-console */

//intersection observer photo animation on scroll
const lamps = document.querySelectorAll('.wp-block-create-block-dc-animated-lamp .light');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
});
lamps.forEach(el => {
  observer.observe(el);
});
const cords = document.querySelectorAll('.wp-block-create-block-dc-animated-lamp .cord');
const cordObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('drawn');
    }
  });
});
cords.forEach(el => {
  cordObserver.observe(el);
});

//Vanila waypoints
const waypointLamps = document.querySelectorAll('.wp-block-create-block-dc-animated-lamp');
console.log('lamp', waypointLamps);
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const {
    top,
    left,
    bottom,
    right
  } = el.getBoundingClientRect();
  const {
    innerHeight,
    innerWidth
  } = window;
  return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
function checkpoints() {
  waypointLamps.forEach(lamp => {
    const light = lamp.querySelector('.light');
    console.log('light', light);
    const cord = lamp.querySelector('.cord');
    console.log('cord', cord);
    const visible = elementIsVisibleInViewport(lamp);
    if (visible) {
      lamp.classList.add('faded-in');
      light.classList.add('on');
      cord.classList.add('drawn');
      // console.log('faded in');
    } else {
      // console.log('not visible');
    }
  });
}
window.addEventListener("scroll", checkpoints);
/******/ })()
;
//# sourceMappingURL=view.js.map