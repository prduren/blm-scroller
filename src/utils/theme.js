import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const colors = {
  primary: "#ff3333",
  secondary: "#808080",
  tertiary: " #ffffff",
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
