/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<div className='custom-lamp' { ...useBlockProps() }>
			{/* { __(
				'Dc Animated Lamp – hello from the editor!',
				'dc-animated-lamp'
			) } */}
			<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 112.26 519.13">
  <defs>
    <style>
    
    </style>
  </defs>
  <g id="Layer_1-2">
    <g>
      <g>
        <path class="st1" d="M112.26,474.2H0c11.79-12.67,32.52-21.08,56.13-21.08s44.34,8.41,56.13,21.08Z"/>
        <path class="st1" d="M102.17,494.77H10.09c9.67-10.4,26.68-17.29,46.04-17.29s36.37,6.9,46.04,17.29Z"/>
        <path class="st1" d="M85.69,509.15H26.57c6.21-6.68,17.13-11.1,29.56-11.1s23.35,4.43,29.57,11.1h0Z"/>
        <path class="st1" d="M61.38,513.87c0,2.9-2.36,5.26-5.26,5.26s-5.25-2.36-5.25-5.26c0-.5.07-.99.2-1.44h10.11c.13.46.2.95.2,1.44Z"/>
      </g>
      <line class="st0" x1="56.13" y1="457.15" x2="56.13"/>
    </g>
  </g>
</svg>
		</div>
	);
}
