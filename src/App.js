import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import KeySkills from "./components/keySkills/KeySkills";
import MyWork from "./components/myWork/MyWork";

import Slide from "react-reveal/Slide";

function App() {
  return (
    <>
      <Header />
      <main>
        <Slide right>
          <About />
        </Slide>
        <Slide left>
          <KeySkills />
        </Slide>
        <Slide right>
          <MyWork />
        </Slide>
        <Slide left>
          <Contact />
        </Slide>
        <Footer />
      </main>
    </>
  );
}

export default App;
