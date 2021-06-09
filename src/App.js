import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import KeySkills from "./components/keySkills/KeySkills";
import MyWork from "./components/myWork/MyWork";

function App() {
  return (
    <>
      <Header />{" "}
      <main>
        <About />
        <KeySkills />
        <MyWork />
        <Footer />
      </main>
    </>
  );
}

export default App;
