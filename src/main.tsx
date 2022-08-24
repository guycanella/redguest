import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

const colors = {
	brand: {
		branco: "#fff",
		"cinza-100": "#e1e1e6",
		"cinza-300": "#c4c4cc",
		"cinza-400": "#8d8d99",
		"cinza-600": "#323238",
		"cinza-700": "#29292e",
		"cinza-800": "#202024",
		"cinza-900": "#121214",
		"verde-500": "#00b37e",
	},
};

const breakpoints = {
	pp: "375px",
	p: "425px",
	m: "768px",
	g: "1028px",
	gg: "1280px",
	xg: "1366px",
};

const theme = extendTheme({
	styles: {
		global: {
			"*": {
				margin: "0",
				padding: "0",
				boxSizing: "border-box",
			},
			html: {
				w: "100vw",
			},
			body: {
				bg: "#121214",
				color: "#c4c4cc",
			},
			"body, input, textarea, button": {
				fontFamily: `'Roboto', sans-serif`,
				fontWeight: "400",
				fontSize: "1rem",
			},
		},
	},
	colors,
	breakpoints,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
