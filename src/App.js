import { useEffect, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import KeySkills from "./components/keySkills/KeySkills";
import MyWork from "./components/myWork/MyWork";

function App() {
  return (
    <>
      <Header />{" "}
      <main onscroll={console.log(window.scrollY)}>
        <About />
        <KeySkills />
        <MyWork />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
