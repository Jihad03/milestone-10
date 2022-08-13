import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <nav>
      <div className="nav-contents">
        <Link to="/" className="nav-logo">
          Fit<span className="text-highlight">Hub</span>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Our Courses</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/contact">Contact</Link>
          {user && (
            <Link to="/">
              {user.displayName ? user.displayName : user.email}
            </Link>
          )}
          {!user && <Link to="/login">Login</Link>}
          {user && (
            <button className="btn" onClick={logOut}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
