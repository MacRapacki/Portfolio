import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import KeySkills from "./components/keySkills/KeySkills";

function App() {
  return (
    <>
      <Header />{" "}
      <main>
        <About />
        <KeySkills />
        <Footer />
      </main>
    </>
  );
}

export default App;
