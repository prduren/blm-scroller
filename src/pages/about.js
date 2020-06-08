import React from "react";
import { Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const AboutPage = () => {
  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <Typography variant="h1">ABOUT</Typography>
      <Typography variant="h4" color="textSecondary">
        This project was created to bring more awareness to the Black Lives
        Matter movement. No frill, no ads, no distractions, and strictly
        information. We want as many eyes on every aspect of the movement as
        possible, including protests, riots, police brutality, and much more.
      </Typography>
      <Typography align="left" variant="h4">
        Technical Info
      </Typography>
      <Typography align="left" paragraph={true}>
        This site was created with create-react-app, Material-UI, Twitter API,
        and more. Take a look at the source code to find out more.
      </Typography>
      <GitHubIcon />
      <TwitterIcon />
    </div>
  );
};

export default AboutPage;
