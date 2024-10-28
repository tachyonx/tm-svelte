<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} name The symbol's name. (https://fonts.google.com/icons?icon.style=Rounded)
	 * @property {`${20 | 24 | 40 | 48}`} [size] The symbol's size in px. default: `24`
	 * @property {`${boolean}`} [fill] Use `false` for **outlined** symbols (default) or `true` for *completely* **filled** symbols.
	 * @property {`${100 | 200 | 300 | 400 | 500 | 600 | 700}`} [wght] The symbol’s stroke weight, between thin (100) and bold (700). default: 400
	 * @property {`${-25 | 0 | 200}`} [grad] The symbol stroke's emphasis. **Low** emphasis (-25), default (0), and  **high** emphasis (200)
	 */

	/** @type {Props} */
	const { name, size = '24', fill = 'false', wght = '400', grad = '0' } = $props();
</script>

<span
	style="width: {size}px; font-size: {size}px; font-variation-settings: 'FILL' {JSON.parse(fill)
		? 1
		: 0}, 'wght' {wght}, 'GRAD' {grad}, 'opsz' {size}"
	class="font-material-symbols-rounded block aspect-square select-none overflow-clip leading-none"
>
	{name}
</span>
