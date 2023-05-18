import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div class="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>acceuil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à props</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
