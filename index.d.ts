/**
 * Type definitions for liteslider
 * Project: https://github.com/foxshack/liteslider
 * Definitions by: mikeh74
 */

/**
 * Responsive configuration for a specific breakpoint
 */
export interface ResponsiveConfig {
  /** Number of items to show at this breakpoint */
  items: number;
  /** Gutter space between items in pixels */
  gutter: number;
  /** Optional preview space in pixels */
  preview?: number;
}

/**
 * Responsive breakpoint configuration
 * Keys represent viewport widths in pixels
 */
export interface ResponsiveOptions {
  [breakpoint: number]: ResponsiveConfig;
}

/**
 * Slider initialization options
 */
export interface SliderOptions {
  /**
   * CSS selector for the slider container
   * @default '.slider'
   */
  container?: string;
  
  /**
   * Responsive configuration for different viewport sizes
   * @default {
   *   0: { items: 2, gutter: 16 },
   *   576: { items: 3, gutter: 16 },
   *   768: { items: 4, gutter: 16 },
   *   992: { items: 5, gutter: 16 },
   *   1200: { items: 6, gutter: 16 }
   * }
   */
  responsive?: ResponsiveOptions;
  
  /**
   * CSS class to hide navigation elements
   * @default 'hidden'
   */
  hiddenClass?: string;
}

/**
 * Slider instance with methods to control the slider
 */
export interface SliderInstance {
  /**
   * Re-render the pager and recalculate scroll positions.
   * Call this method after filtering slider elements to update the pager
   * and button states based on the currently visible elements.
   */
  refresh(): void;
}

/**
 * Initialize sliders on the page with the given options
 * @param options - Configuration options for the slider
 * @returns An array of slider instances
 */
declare function slider(options?: SliderOptions): SliderInstance[];

export default slider;
