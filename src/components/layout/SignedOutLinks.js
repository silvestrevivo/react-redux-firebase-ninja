import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Sing up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
