import { Link as MuiLink } from "@material-ui/core";
import React from "react";
import { Link as DomLink } from "react-router-dom";

export default function Link(props) {
  return <MuiLink {...props} />;
}

Link.defaultProps = {
  component: DomLink,
};
