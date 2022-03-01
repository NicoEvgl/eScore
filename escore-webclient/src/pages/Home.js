import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResultsList from "../components/ResultsList";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <ResultsList />
      <Footer />
    </div>
  );
};

export default Home;
