import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />{" "}
      <main>
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;
