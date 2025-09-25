import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [open, isOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const menuData = [
    { label: "Home", path: "/" },
    { label: "Atlantiis", path: "/atlantis" },
    { label: "About Us", path: "/about-us" },
    { label: "Other Projects", path: "/other-projects" },
    { label: "Media", path: "/media" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    isOpen(false);
  }, [location]);

  const headerRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight || 0;

    const scrollFunction = () => {
      if (window.pageYOffset > headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <header ref={headerRef} className={`header ${isSticky ? "sticky" : ""}`}>
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
              <span className={`lines one ${open ? "active" : ""}`}></span>
              <span className={`lines two ${open ? "active" : ""}`}></span>
              <span className={`lines three ${open ? "active" : ""}`}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
