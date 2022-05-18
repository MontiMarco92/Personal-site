module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				logo: ["Fira Code"],
			},
			backgroundImage: {
				Netflix: "url('/src/assets/NetflixHome.png')",
				NetflixGradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/NetflixHome.png')",
				ATR: "url('/src/assets/homeClientATR.png')",
				ATRgradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/homeClientATR.png')",
				Dog: "url('/src/assets/landingPageDogs.png')",
				DogGradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/landingPageDogs.png')",
				WP: "url('/src/assets/WavePortal.png')",
				WPgradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/WavePortal.png')",
			},
			screens: {
				"hover-hover": { raw: "(hover:hover)" }, //defined custom media query to activate hover effects only on screens that has hover capabilities (exc, no on touch screens)
			},
		},
	},
	plugins: [],
};
