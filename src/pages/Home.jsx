import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Navigation from "../Components/Navigation";
import Popular from "../Components/Popular";
import Ads from "../Components/Ads";
import Deal from "../Components/Deal";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Categories />
      <Popular />
      <Ads />
      <Footer />
      <Deal />
    </>
  );
};

export default Home;
