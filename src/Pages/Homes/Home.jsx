import React from "react";
import Hero from "./Hero";
import About from "./About";
import Advantages from "./Services";
import Services from "./Services";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
