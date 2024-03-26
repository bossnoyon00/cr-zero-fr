import React from "react";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";
import "../../styles/landingPage.css";
import MetaData from "../../components/other/MetaData";

function LandingPage() {
  return (
    <main>
      <MetaData title={'Welcome to Affiliated Refer'} />
      <Hero />
      <Main />
      <Footer />
    </main>
  );
}

export default LandingPage;
