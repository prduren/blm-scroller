import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const colors = {
  primary: "#ffcb47",
  secondary: "#8aa1b1",
  tertiary: "#4a5043",
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
