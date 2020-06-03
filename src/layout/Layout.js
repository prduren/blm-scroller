import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Link from "../components/Link";

function Layout({ children }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            Black Lives Matter
          </Typography>
        </Toolbar>
      </AppBar>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/donate">donate</Link>
      {children}
    </div>
  );
}

export default Layout;
