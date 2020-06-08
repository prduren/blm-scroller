import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: { main: "#bada55" },
    secondary: { main: "#8DA9C4" },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
