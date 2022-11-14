import React from "react";
// Sections
import Header from "./Header";
import Services from "./Services";
//import Projects from "../components/Sections/Projects";
//import Blog from "../components/Sections/Blog";
import Pricing from "./Pricing";
import Contact from "./Contact";

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
