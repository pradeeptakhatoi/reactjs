import React from "react";

import Banner from "../banner/banner.component";
import PopularSweets from "../popular-sweets/popular-sweets.component";
import OurMenu from "../our-menu/our-menu.component";

class Home extends React.Component {
  render() {
    return (
      <div className="App">       
        <Banner />
        <OurMenu />
        <PopularSweets />        
      </div>
    );
  }
}

export default Home;
