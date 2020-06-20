import React from "react";

import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import Banner from "../banner/banner.component";
import PopularSweets from "../popular-sweets/popular-sweets.component";
import OurMenu from "../our-menu/our-menu.component";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <OurMenu />
        <PopularSweets />
        <Footer />
      </div>
    );
  }
}

export default Home;
