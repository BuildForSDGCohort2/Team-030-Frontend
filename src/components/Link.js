import React from "react";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

const CustomizedLink = (props) => {
  const { to, title, style } = props;
  return (
    <Link
     exact
     to={to}
     style={{
      textDecoration: "none",
      color: "inherit",
      ...style,
     }}
    >
      {title}
    </Link>
  );
};

CustomizedLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

export default CustomizedLink;
