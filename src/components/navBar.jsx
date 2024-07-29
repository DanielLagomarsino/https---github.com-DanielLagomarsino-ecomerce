import React, { Component } from "react";
import "../style/navBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className ="navbar navbar-light bg-light">
        <a className ="navbar-brand" href="#">
          Navbar <span className="badge badge-pill text-bg-secondary">{this.props.totalCounters}</span>
        </a>
      </nav>
    );
  }
};

export default NavBar;
