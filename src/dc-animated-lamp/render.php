<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<!-- <p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e('Dc Animated Lamp – hello from a dynamic block!', 'dc-animated-lamp'); ?></p> -->


<div <?php echo get_block_wrapper_attributes(); ?>>
  <?php echo
  '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 114.19 384.13">
  <!-- Generator: Adobe Illustrator 30.8.2, SVG Export Plug-In . SVG Version: 2.1.4 Build 7)  -->
  <defs>
    <style>
      .st0 {
        fill: none;
        stroke: #f4932b;
        stroke-miterlimit: 10;
      }

      .st1 {
        fill: #f4932b;
      }
    </style>
  </defs>
  <path class="st1 light" d="M114.19,338.93H0c12-12.89,33.08-21.45,57.09-21.45s45.1,8.55,57.1,21.45Z"/>
  <path class="st1 light" d="M103.93,359.69H10.26c9.84-10.57,27.14-17.59,46.83-17.59s36.99,7.02,46.83,17.59h0Z"/>
  <path class="st1 light" d="M87.17,374.16H27.02c6.32-6.8,17.43-11.3,30.07-11.3s23.75,4.51,30.07,11.3h0Z"/>
  <path class="st1 light" d="M87.17,303.02H27.02c6.32,6.79,17.43,11.3,30.07,11.3s23.76-4.51,30.07-11.3h0Z"/>
  <path class="st1 light" d="M62.44,378.79c0,2.95-2.4,5.35-5.35,5.35s-5.34-2.4-5.34-5.35c0-.51.07-1,.2-1.47h10.28c.13.47.2.96.2,1.47h0Z"/>
  <line class="st0 cord" x1="57.09" x2="57.09" y2="303.02"/>
</svg>';
  ?>
</div>