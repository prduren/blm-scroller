import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const colors = {
  primary: "#ff3333",
  secondary: "#5c85d6",
  tertiary: " #9494b8",
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
