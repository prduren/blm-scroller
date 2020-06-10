import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const colors = {
  primary: "#50514f",
  secondary: "#cbd4c2",
  tertiary: "#fffcff",
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
