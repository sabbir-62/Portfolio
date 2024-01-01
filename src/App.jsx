
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About"><About /></section>
      {/* <section id="Education">Education</section>
      <section id="Skills">Skills</section> */}
      <section id="Works"><Portfolio /></section>
      <section id="Contact"><Contact /></section>
    </div>
  );
}

export default App;
