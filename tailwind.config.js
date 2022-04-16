module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
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
		},
	},
	plugins: [],
};
