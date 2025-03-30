import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function Navbar(props) {
  const navbarStyle = {
    backgroundColor: props.mode === "dark" ? "#0D1117" : "#F8F9FA", // Darker shade for dark mode, lighter for light mode
    color: props.mode === "dark" ? "#EDEDED" : "#212529", // White text for dark mode, black for light mode
    borderBottom: props.mode === "dark" ? "2px solid #30363D" : "2px solid #D6D6D6", // Subtle border for separation
  };

  const linkStyle = {
    color: props.mode === "dark" ? "#EDEDED" : "#212529",
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={linkStyle}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={linkStyle}>
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <div className="form-check form-switch" style={{ marginRight: "8px" }}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
            </div>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={linkStyle}>
              {props.mode === "dark" ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// PropTypes definition
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
