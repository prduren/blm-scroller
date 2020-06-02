import React from "react";
import { CssBaseline } from "@material-ui/core";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      {Routes}
    </div>
  );
}

export default App;
