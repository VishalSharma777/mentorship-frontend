import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { faBell } from '@fortawesome/free-solid-svg-icons';

import "./navbar.css";
function Navbar() {
  const navigate = useNavigate();
  const handlleOnclick = () => {
    navigate("/login");
  };
  return (
    <>
      
      <div className="navbar">
        <div className="logo nav_content">
          {/* <img src="logo.jpg" alt="image loading" /> */}
          <h1>
            mentor<span>ship</span>
          </h1>
        </div>
        <div className="nav-middle">
          <ul className="navlist">
            <li>
              <Link to="/cards" className="nav-link">
                Mentor
              </Link>
            </li>
            <li>
              <Link to="/card" className="nav-link">
                Mentee
              </Link>
            </li>
            <li>
              <Link to="/session" className="nav-link">
                Session
              </Link>
            </li>
          </ul>
        </div>

        <div className="navright ">
          <div className="navbar-search">
            <input
              type="text"
              name="address"
              className="search-bar"
              placeholder="Search ..."
            />
            <button type="submit" className="navbtn1">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          {/* <button id="navbtn" className="button">Dashboard</button> */}
          <button id="navbtn2" className="button" onClick={handlleOnclick}>
            Login
          </button>
        
          
          <div className="nav-img"></div>
          <div className="notification-icon">
          <FontAwesomeIcon icon={faBell} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;