import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const menuData = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Atlantiis",
      path: "/atlantis",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Other Projects",
      path: "/other-projects",
    },
    {
      label: "Media",
      path: "/media",
    },
    {
      label: "Contact",
      path: "/contact",
    },
    // {
    //   label: "Client & Collaborations",
    //   path: "/clients",
    // },
    // {
    //   label: "Resources",
    //   path: "/resources",
    // },
  ];
  const [open, isOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    isOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div
        className={`overlay ${open ? "active" : ""}`}
        onClick={() => isOpen(!open)}
      ></div>
      <div className="container">
        <div className="header-wrapper-container">
          <div className="logo-container">
            <NavLink to="/">
              <img src="/images/logo.png" alt="logo" />
            </NavLink>
          </div>
          <div className="navbar-wrapper-container">
            <div className={`navbar-container ${open ? "active" : ""}`}>
              <ul className="navbar-list">
                {menuData.map((value, index) => (
                  <li className="navbar-item" key={index}>
                    <NavLink to={value.path}>{value.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className="hamburger-menu"
              onClick={() => isOpen(!open)}
            >
              <span className={`line one ${open ? "active" : ""}`}></span>

              <span className={`line two ${open ? "active" : ""}`}></span>
              <span className={`line three ${open ? "active" : ""}`}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
