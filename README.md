# etch-a-sketch

A simple, clean browser-based Etch-a-Sketch project built using Html, JavaScript and CSS Flexbox. 

The grid starts out completely blank. When you hover over a square for the first time, it locks in a random RGB color at 10% opacity. Every time you hover over that same square again, it gets 10% darker until it becomes fully solid.

## Features

* **Custom Grid Sizes:** Click the "New Grid" button to input a custom resolution (anywhere from 1x1 to 64x64). The code automatically calculates the correct sizing.
* **Smart Color Locking:** The squares only pick a random color on the *first* hover. On subsequent hovers, they keep their color and only increase in opacity instead of constantly cycling through random colors.
* **Progressive Shading:** Every hover increases the box's opacity by `0.1` until it hits a max opacity of `1`.
* **Clean DOM Reset:** Uses `replaceChildren()` to quickly wipe out the old grid before drawing a new one, keeping it fast and performant.

### Handling String-to-Number Opacity
When you fetch `box.style.opacity` in JavaScript, it returns a string (like `"0.1"`). To do math on it without the browser breaking or gluing text together, I used `parseFloat()` to turn it into a decimal number, and `.toFixed(1)` to stop rounding errors:

```javascript
let currentOpacity = parseFloat(box.style.opacity);
if (currentOpacity < 1) {
  box.style.opacity = (currentOpacity + 0.1).toFixed(1);
}