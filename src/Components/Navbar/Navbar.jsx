import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="NavbarItems">
        <h1
          className="navbar-logo"
          onClick={() => window.location.reload(navigate("/"))}
        >
          Moviebuff
        </h1>
      </nav>
    </div>
  );
}

export default Navbar;
