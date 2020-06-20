import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner owl-carousel">
        <div className="item">
          <img src="images/banner1.png" alt="Sweet Shop banner" />
        </div>
        <div className="item">
          <img src="images/banner2.png" alt="Sweet Shop banner" />
        </div>
      </div>
    );
  }
}

export default Banner;
