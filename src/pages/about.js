import React from "react";
import { Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 10px;
  padding: 1rem;
  margin-top: 3rem;
`;

const AboutPage = () => {
  return (
    <div
      style={{
        padding: 24,
        textAlign: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Typography variant="h2">ABOUT</Typography>
      <Typography variant="h4" color="textSecondary">
        This project was created to bring more awareness to the Black Lives
        Matter movement. No frill, no ads, no distractions, and strictly
        information. We want as many eyes on every aspect of the movement as
        possible, including protests, riots, police brutality, and much more.
      </Typography>
      <StyledDiv>
        <Typography align="left" variant="h4">
          Technical Info
        </Typography>
        <Typography align="left" paragraph={true}>
          This site was created with create-react-app, Material-UI, Twitter API,
          and more. Take a look at the source code to find out more.
        </Typography>
        <div align="left">
          <a
            href="https://github.com/prduren/blm-scroller"
            rel="noopener noreferrer"
            target="_blank"
          >
            source code:
            <GitHubIcon />
          </a>
        </div>
        <div align="left">
          <a
            href="https://developer.twitter.com/en/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            twitter API:
            <TwitterIcon />
          </a>
        </div>
      </StyledDiv>
    </div>
  );
};

export default AboutPage;
