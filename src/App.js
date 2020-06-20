import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./components/homepage/homepage.component";
import ProductList from "./components/product-list/product-list.component";
import AboutUs from "./components/aboutus/aboutus.component";

function App() {
  return (
    <div>
      <Header />
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/product-list" component={ProductList} />
      <Route path="/aboutus" component={AboutUs} />
      <Footer />
    </div>
  );
}

export default App;
