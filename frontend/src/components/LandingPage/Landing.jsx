import React from "react";
// Sections
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
//import Projects from "../components/Sections/Projects";
//import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";

export default function Landing() {
  return (
    <>
      <Header />
      <Services />

      <Pricing />
      <Contact />
    </>
  );
}
