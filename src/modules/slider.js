// Dependencies: slider-factory.js, pager-factory.js, utils.js
import makeSlider from './slider-factory.js'

/**
 * slider is just a wrapper function that initialises the slider
 * based on the options passed to it.
 * It also sets the default options for the slider.
 *
 * Users can pass their own options to the slider function and override
 * the default options to customise the slider as required.
 *
 * @param {Object} Options object
 * @returns {Object} Object with refresh function
 */
const slider = function ({
  container = '.slider',
  responsive = {
    0: {
      items: 2,
      gutter: 16,
    },
    576: {
      items: 3,
      gutter: 16,
    },
    768: {
      items: 4,
      gutter: 16,
    },
    992: {
      items: 5,
      gutter: 16,
    },
    1200: {
      items: 6,
      gutter: 16,
    },
  },
  hiddenClass = 'hidden',
} = {}) {
  /**
   * Get a list of all the slider items on the page
   */
  const sliders = document.querySelectorAll(container)

  /**
   * Map to store slider instances by their refresh ID
   */
  const instancesMap = new Map()
  let refreshIdCounter = 0

  /**
   * Initialise sliders from a NodeList based on the current selector
   */
  sliders.forEach((sliderEl) => {
    // Generate unique refresh ID
    const refreshId = `slider-${refreshIdCounter++}`
    
    // Set the refresh ID as a data attribute
    sliderEl.setAttribute('data-refresh-id', refreshId)
    
    // Create slider instance
    const instance = makeSlider(sliderEl, responsive, hiddenClass)
    
    // Store instance by refresh ID
    instancesMap.set(refreshId, instance)
  })

  /**
   * Refresh function that can be called with a slider ID
   * @param {string} sliderId - The refresh ID of the slider to refresh
   */
  const refresh = function (sliderId) {
    const instance = instancesMap.get(sliderId)
    if (instance && typeof instance.refresh === 'function') {
      instance.refresh()
    }
    else {
      console.warn(`Slider with ID "${sliderId}" not found or does not support refresh.`)
    }
  }

  return { refresh }
}

export default slider
