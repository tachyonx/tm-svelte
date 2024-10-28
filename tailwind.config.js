/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				kalam: 'Kalam',
				nunito: 'Nunito',
				'material-symbols-rounded': 'Material Symbols Rounded'
			}
		}
	},

	plugins: []
};
