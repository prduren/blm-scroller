import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const colors = {
  primary: "#1B252F",
  secondary: "#43678a",
  tertiary: "#afcfed",
};

let theme = createMuiTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    tertiary: { main: colors.tertiary },
  },
});

theme.colors = colors;
theme = responsiveFontSizes(theme);

export default theme;
