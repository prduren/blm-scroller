import React from "react";
import { Typography } from "@material-ui/core";
import Link from "../components/Link";

const DonatePage = () => {
  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      {" "}
      <Typography variant="h1">DONATE</Typography>
      <Typography variant="h4" color="textSecondary">
        Utilize the below links to donate to various movements and organizations
        related to Black Lives Matter.
      </Typography>
      <a target="_html" href="https://www.gofundme.com/f/georgefloyd">
        George Floyd Memorial Fund
      </a>
    </div>
  );
};

export default DonatePage;
