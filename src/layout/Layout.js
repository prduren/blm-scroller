import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Link from "../components/Link";

const Wrapper = styled.div`
  background: ${(props) => {
    return props.theme.palette.secondary.main;
  }};
  a {
    margin-right: 1rem;
    margin-left: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  border: ${({ theme }) => `2px solid ${theme.colors.tertiary}`};
`;

function Layout({ children }) {
  const history = useHistory();

  function goHome() {
    history.push("/");
  }

  return (
    <Wrapper>
      <AppBar color="tertiary" position="static">
        <Toolbar style={{ borderBottom: "2px solid black" }}>
          <StyledDiv>
            <Button onClick={goHome}>
              <Typography color="inherit">blm-Scroller</Typography>{" "}
            </Button>
          </StyledDiv>
          <Link to="/donate">Donate</Link>
          <Link to="/about">About</Link>
        </Toolbar>
        <Typography
          style={{
            paddingLeft: "2rem",
          }}
          variant="h1"
        >
          black. lives. matter.
        </Typography>
      </AppBar>
      {children}
      <div
        style={{
          position: "relative",
          bottom: "1px",
          right: "1px",
        }}
        class="creators"
      >
        <p style={{ paddingLeft: "0 2rem", fontSize: "1.5rem", margin: 0 }}>
          creators:
          <a
            href="https://github.com/prduren"
            rel="noopener noreferrer"
            target="_blank"
          >
            prduren
          </a>
          <a
            href="https://github.com/glweems"
            rel="noopener noreferrer"
            target="_blank"
          >
            glweems
          </a>
        </p>
      </div>
    </Wrapper>
  );
}

export default Layout;
