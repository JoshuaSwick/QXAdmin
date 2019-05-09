import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/order" activeStyle={activeStyle}>
        Orders
      </NavLink>
      {" | "}
      <NavLink to="/report" activeStyle={activeStyle}>
        Reports
      </NavLink>
      {" | "}
      <NavLink to="/reports/ordershipped" activeStyle={activeStyle}>
        Reports - Orders Shipped
      </NavLink>
      {" | "}
      <NavLink to="/dealer" activeStyle={activeStyle}>
        Dealers
      </NavLink>
    </nav>
  );
};

export default Header;
