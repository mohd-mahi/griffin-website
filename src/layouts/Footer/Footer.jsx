import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section padding-section">
      <div className="container">
        <div className="row justify-content-between gy-5">
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="footer logo" />
            </div>
            <div className="footer-title-text">
              <span>a venture by</span>
              <ul>
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-item">
              <h3>
                <img src="/images/gold-ball-icon.png" alt="" />
                Explore
              </h3>
              <ul className="footer-nav-item">
                <li>
                  <NavLink to="?">Atlantiis</NavLink>
                </li>
                <li>
                  <NavLink to="?">About</NavLink>
                </li>
                <li>
                  <NavLink to="?">Other Project</NavLink>
                </li>
                <li>
                  <NavLink to="?">Media</NavLink>
                </li>
                <li>
                  <NavLink to="?">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h3>
                <img src="/images/gold-ball-icon.png" alt="" />
                Contact
              </h3>
              <ul className="footer-nav-item">
                <li>
                  <NavLink to="?">
                    <img src="/images/phone.png" alt="" />
                    7796351111
                  </NavLink>
                </li>
                <li>
                  <NavLink to="?">
                    <img src="/images/mail.png" alt="" />
                    griffininnfra@gmail.com
                  </NavLink>
                </li>
                <li>
                  <NavLink to="?">
                    <img src="/images/globe.png" alt="" />
                    www.griffininnfra.com
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h3>
                <img src="/images/gold-ball-icon.png" alt="" />
                Find
              </h3>
              <ul className="footer-nav-item">
                <li>
                  Atlantiis, 182, Near Kachhi Jain Bhavan, Ram Mandir Chowk,
                  Sangli. 416416 (MH) India.
                </li>
                <li>
                  Griffinn Innfra, 635, Suyashh Metropole, O ce No 502. 5th
                  Floor, Pushparaj Chowk Sangli 416416.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
