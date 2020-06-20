import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <section className="footer content-row">
          <div className="wrapper">
            <h2>
              Sweet <span>Shop</span>
            </h2>
            <ul className="social-icon">
              <li>
                <a href="http://localhost:3000/">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/">
                  <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <ul className="footer-menu">
              <li>
                <a href="http://localhost:3000/">Menu</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Help</a>
              </li>
              <li>
                <a href="http://localhost:3000/">About Us</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Story</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Location</a>
              </li>
            </ul>
            <ul className="footer-links">
              <li>
                <a href="http://localhost:3000/">Contact Us</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Blog</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Delivery</a>
              </li>
            </ul>
          </div>
        </section>
        <div className="footer-image">
          <div className="wrapper">
            <img src="images/footer-img.jpg" alt="Sweet Shop product" />
          </div>
        </div>
        <section className="copy-rt">
          <div className="wrapper">
            <p>All right Reserved</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
