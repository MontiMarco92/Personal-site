module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,json}"],
	theme: {
		extend: {
			fontFamily: {
				logo: ["Fira Code"],
			},
			backgroundImage: {
				P12: "url('/src/assets/images/p12.png')",
				Novo: "url('/src/assets/images/novo.png')",
				Novonesis: "url('/src/assets/images/novonesis.png')",
				Rustique: "url('/src/assets/images/rustique.png')",
				Auditor: "url('/src/assets/images/auditor.png')",
			},
			screens: {
				"hover-hover": { raw: "(hover:hover)" }, //defined custom media query to activate hover effects only on screens that has hover capabilities (exc, no on touch screens)
			},
		},
	},
	plugins: [],
};
