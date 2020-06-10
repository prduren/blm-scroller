import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import theme from "./utils/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import "./index.css";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <App />
        </StyledThemeProvider>
      </MuiThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
