import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>ACCEUIL</h1>
      <Countries />
    </div>
  );
};

export default Home;
