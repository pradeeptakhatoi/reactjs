import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="row header">
        <div className="header-top">
          <div className="wrapper">
            <div className="top-callus">Call Us +44 234567889</div>
            <ul className="top-links">
              <li>
                <a href="http://localhost:3000/">My Account</a>
              </li>
              <li>
                <a href="http://localhost:3000/">FAQ</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Help</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-btm">
          <div className="wrapper">
            <Link to="/" className="logo">
              <img src="images/logo.png" alt="Sweet Shop logo" />
            </Link>
            <div className="locations-section">
              <i>
                <img src="images/lications-icon.png" alt="" />
              </i>
              <select>
                <option>Indiranagar Bengalur, Karnataka, India</option>
              </select>
            </div>
            <aside className="header-right">
              <span className="respo_menu">
                <i className="fa fa-bars" aria-hidden="true"></i>MENU
              </span>
              <nav className="nav">
                <div className="respo_close">&#10006;</div>
                <ul className="menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About</Link>
                  </li>
                  <li className="sub-menuXX">
                    <Link to="/product-list">Products</Link>
                  </li>
                  <li>
                    <Link to="/">Services</Link>
                  </li>
                  <li>
                    <Link to="/">Gifts</Link>
                  </li>
                </ul>
              </nav>
              <ul className="ecommerce-links">
                <li>
                  <Link to="/">
                    <img src="images/ecommerce-icon1.png" alt="" />
                  </Link>
                </li>
                <li>
                  <a href="about.html">
                    <img src="images/ecommerce-icon2.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="project.html">
                    <img src="images/ecommerce-icon3.png" alt="" />
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
