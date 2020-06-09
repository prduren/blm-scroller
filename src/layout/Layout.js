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
        <Toolbar>
          <StyledDiv>
            <Button onClick={goHome}>
              <Typography color="inherit">Black Lives Matter</Typography>{" "}
            </Button>
          </StyledDiv>
          <Link to="/donate">Donate</Link>
          <Link to="/about">About</Link>
        </Toolbar>
      </AppBar>
      {children}
    </Wrapper>
  );
}

export default Layout;
