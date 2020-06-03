import { Link as MuiLink } from "@material-ui/core";
import { Link as DomLink } from "react-router-dom";

MuiLink.defaultProps = {
  component: DomLink,
};

export default MuiLink;
