import React from "react";
import MLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MLink color="inherit" href=" ">
        Our Team
      </MLink>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
export default Copyright;
