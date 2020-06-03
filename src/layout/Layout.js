import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Link from "../components/Link";

function Layout({ children }) {
  const history = useHistory();

  function goHome() {
    history.push("/");
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={goHome}>
            <Typography color="inherit">Black Lives Matter</Typography>{" "}
          </Button>
        </Toolbar>
      </AppBar>
      <Link to="/about">about</Link>
      <Link to="/donate">donate</Link>
      {children}
    </div>
  );
}

export default Layout;
