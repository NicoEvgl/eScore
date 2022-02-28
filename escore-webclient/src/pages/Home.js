import React from "react";
import Header from "../components/header/Header";
import ResultsList from "../components/containers/ResultsList";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <ResultsList />
    </div>
  );
};

export default Home;
