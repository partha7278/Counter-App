import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCounter }) => {
  console.log("Nabar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounter}
        </span>
      </a>
    </nav>
  );
};
// class NavBar extends Component {
//   render() {
//
//   }
// }

export default NavBar;
