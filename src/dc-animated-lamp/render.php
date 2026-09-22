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
  '<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 112.26 519.13">
  <!-- Generator: Adobe Illustrator 30.8.1, SVG Export Plug-In . SVG Version: 2.1.4 Build 1)  -->
  <defs>
    <style>
      .st0 {
        fill: none;
        stroke: #F4932B;
        stroke-miterlimit: 10;
      }

      .st1 {
        fill: #F4932B;
      }
    </style>
  </defs>
  <g class="light">

    <path class="st1" d="M112.26,474.2c-11.79-12.67-32.52-21.08-56.13-21.08s-44.34,8.41-56.13,21.08h112.26Z"/>
    <path class="st1" d="M102.17,494.77c-9.67-10.39-26.68-17.29-46.04-17.29s-36.37,6.89-46.04,17.29h92.08Z"/>
    <path class="st1" d="M85.69,509.15h0c-6.22-6.67-17.14-11.1-29.57-11.1s-23.35,4.42-29.56,11.1h59.12Z"/>
    <path class="st1" d="M61.38,513.87c0-.49-.07-.98-.2-1.44h-10.11c-.13.45-.2.94-.2,1.44,0,2.9,2.35,5.26,5.25,5.26s5.26-2.36,5.26-5.26Z"/>
  </g>
  <path class="st0 cord" d="M56.13,0v457.15"/>
</svg>';
  ?>
</div>