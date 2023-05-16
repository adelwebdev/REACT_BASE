import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div class="navigation">
      <ul>
        <NavLink to="/">
          <li>acceuil</li>
        </NavLink>
        <NavLink to="/about">
          <li>à props</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
