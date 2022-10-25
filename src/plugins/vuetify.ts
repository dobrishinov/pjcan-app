// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "../styles/vuetify.scss";

// Vuetify
import { createVuetify, ThemeDefinition } from "vuetify";

const customDarkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#121517",
		surface: "#21262a",
		primary: "#0b677b",
		secondary: "#25323e",
		accent: "#9c27b0",
		error: "#ef5350",
		info: "#78909c",
		success: "#66bb6a",
		warning: "#ffee58",
		menu: "#3f6e90"
	}
};
export default createVuetify({
	theme: {
		defaultTheme: "customDarkTheme",
		themes: {
			customDarkTheme
		}
	}
});
