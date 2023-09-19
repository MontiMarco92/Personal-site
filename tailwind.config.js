module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,json}"],
	theme: {
		extend: {
			fontFamily: {
				logo: ["Fira Code"],
			},
			backgroundImage: {
				Netflix: "url('/src/assets/images/NetflixHome.png')",
				NetflixGradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/images/NetflixHome.png')",
				ATR: "url('/src/assets/images/homeClientATR.png')",
				ATRgradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/images/homeClientATR.png')",
				Dog: "url('/src/assets/images/landingPageDogs.png')",
				DogGradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/images/landingPageDogs.png')",
				WP: "url('/src/assets/images/WavePortal.png')",
				WPgradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/images/WavePortal.png')",
				P12: "url('/src/assets/images/p12.png')",
				P12gradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/images/p12.png')",
				Novo: "url('/src/assets/images/novo.png')",
				Novogradient:
					"linear-gradient(to right, rgba(112, 157, 255, 0.6), hsla(242, 74%, 61%, 0.5)), url('/src/assets/images/novo.png')",
			},
			screens: {
				"hover-hover": { raw: "(hover:hover)" }, //defined custom media query to activate hover effects only on screens that has hover capabilities (exc, no on touch screens)
			},
		},
	},
	plugins: [],
};
