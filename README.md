# Lite Slider

Lite Slider is a simple JavaScript library that uses CSS and JavaScript to
create a lightweight and accessible alternative to popular slider and carousel
libraries.

---

## Features

- Lightweight and fast
- Accessible markup and navigation
- Uses native browser scrolling and [CSS scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap)
- Minimal vanilla JavaScript
- No dependencies
- No auto-scrolling or looping (keeps things simple)

---

If you need additional functionality, consider using a more fully-featured
library like [Slick slider](https://kenwheeler.github.io/slick/) or 
[Tiny slider](https://github.com/ganlanyuan/tiny-slider).


## Quick Start

```shell
npm install --save-dev github:lte-packages/liteslider#1.3.2
```

If you are using a bundler like webpack or parcel you can then include in your
main JS file as follows:

```js
import slider from 'liteslider';

// run this to initialise it (see options below)
slider();
```

Alternatively you can use a CDN to include it.

You can clone or download the repo and copy the files into your project
or you can use [jsdelivr](https://www.jsdelivr.com) to access them. The example
provided here is using jsdelivr as this is the quickest and easiest way to get
started:


```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>liteslider</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/foxshack/liteslider@1.3.1/dist/slider.css">
</head>
<body>

  <div class="slider">
    <div class="slider-nav hidden">
      <button type="button" class="slider-button slider-prev">Previous</button>
      <button type="button" class="slider-button slider-next">Next</button>
    </div>
    <div class="slider-inner">
      <div class="slider-item"><img alt="" src="./images/img1.jpg"></div>
      <div class="slider-item"><img alt="" src="./images/img2.jpg"></div>
      <div class="slider-item"><img alt="" src="./images/img3.jpg"></div>
      <div class="slider-item"><img alt="" src="./images/img4.jpg"></div>
      <div class="slider-item"><img alt="" src="./images/img5.jpg"></div>
      <div class="slider-item"><img alt="" src="./images/img6.jpg"></div>
      <div class="slider-item"><img alt="" src="./images/img7.jpg"></div>
      <div class="slider-item"><img alt="" src="./images/img8.jpg"></div>
      <div class="slider-item"><img alt="" src="./images/img9.jpg"></div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/gh/foxshack/liteslider@1.3.1/dist/index.js"></script>
  <script>
    slider();
  </script>
</body>
</html>

```

---

See demo/index.html for more [examples](https://foxshack.github.io/liteslider/demo/).


## Slider CSS

The included CSS is minimal but ensures that the slider items snap to the grid 
and space roughly to the required size without any JavaScript.

The idea is to keep the amount of additional JavaScript to a bare minimum by 
using native CSS features as far as possible.

In particular, we rely on [scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap) to ensure that slider elements line up to the start of the 
scroll area when a user scrolls.

---

## Usage

Call `slider()` after including the JS file. All elements with the class 
`slider` will be initialized automatically.

### Multiple Sliders

You can have multiple sliders on the same page. Each `.slider` element will 
be initialized.

### Options

The `slider()` function accepts an options object with the following properties:

#### `container` (string)

CSS selector for the slider element(s) to initialize.

- **Type:** `string`
- **Default:** `.slider`

**Example:**
```javascript
slider({
  container: '.my-custom-slider'
});
```

#### `responsive` (object)

An object defining responsive breakpoints and their settings. Each key is a 
viewport width in pixels, and the value is an object with slider settings 
for that breakpoint and above.

- **Type:** `object`
- **Default:**
  ```javascript
  {
    0: { items: 2, gutter: 16 },
    576: { items: 3, gutter: 16 },
    768: { items: 4, gutter: 16 },
    992: { items: 5, gutter: 16 },
    1200: { items: 6, gutter: 16 }
  }
  ```

##### Responsive Options

Each breakpoint object can have the following properties:

**`items`** (number) - Number of items to display at once.

**`gutter`** (number) - Gap between items in pixels.

**`preview`** (number, optional) - Amount of pixels to subtract from the 
container width, allowing the next/previous items to peek into view.

**Example:**
```javascript
slider({
  responsive: {
    0: {
      items: 1,
      gutter: 0
    },
    576: {
      items: 2,
      gutter: 16,
      preview: 40  // Show 40px of next item
    },
    992: {
      items: 3,
      gutter: 20
    }
  }
});
```

#### `hiddenClass` (string)

CSS class name used to hide navigation buttons and pager when not needed.

- **Type:** `string`
- **Default:** `hidden`

**Example:**
```javascript
slider({
  hiddenClass: 'd-none'
});
```

### Complete Example

```javascript
slider({
  container: '.product-slider',
  responsive: {
    0: {
      items: 1,
      gutter: 0
    },
    576: {
      items: 2,
      gutter: 16
    },
    768: {
      items: 3,
      gutter: 20,
      preview: 30
    },
    1024: {
      items: 4,
      gutter: 24
    }
  },
  hiddenClass: 'd-none'
});
```

---

## Accessibility

- Keyboard navigation is supported via tabbing and arrow keys.
- Buttons are focusable and use semantic HTML.
- Images should include descriptive `alt` text for best accessibility.

---

## Browser Support

Lite Slider works in all modern browsers that support CSS scroll-snap and ES6 JavaScript.

Tested on:
- Chrome
- Firefox
- Safari
- Edge

---

## API Reference

### `slider(options)`

Initializes all sliders on the page.

**Parameters:**
- `options` (Object, optional): Configuration options
  - `container` (string): CSS selector for slider containers (default: `'.slider'`)
  - `responsive` (Object): Responsive breakpoint configuration
  - `hiddenClass` (string): CSS class to hide elements (default: `'hidden'`)

**Example:**
```javascript
slider({
  container: '.my-slider',
  responsive: {
    0: { items: 2, gutter: 16 },
    768: { items: 4, gutter: 16 }
  }
});
```

### `sliderElement.refresh()`

Each initialized slider element has a `refresh()` method that re-renders the pager and recalculates scroll positions. Call this method after filtering or modifying slider elements to update the pager and button states.

**Example:**
```javascript
// Initialize sliders
slider();

// Get the slider element
const sliderElement = document.querySelector('.slider');

// Filter items
sliderElement.querySelectorAll('.slider-item').forEach(item => {
  if (shouldShowItem(item)) {
    item.classList.remove('hidden');
  } else {
    item.classList.add('hidden');
  }
});

// Refresh the slider to update pager and positions
sliderElement.refresh();
```

See the [filter demo](demo/filter.html) for a complete example.

---

## License

MIT License. See [LICENSE](LICENSE) for details.
