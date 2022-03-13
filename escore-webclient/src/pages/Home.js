import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Scoreboard from "../components/Scoreboard";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Scoreboard />
      <Footer />
    </div>
  );
};

export default Home;
