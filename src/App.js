import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Banner from "./components/banner/banner.component";
import PopularSweets from "./components/popular-sweets/popular-sweets.component";
import OurMenu from "./components/our-menu/our-menu.component";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <OurMenu/>
      <PopularSweets/>
      <Footer/>
    </div>
  );
}

export default App;
