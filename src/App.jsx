
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About"><About /></section>
      <section id="Education">Education</section>
      <section id="Skills">Skills</section>
      <section id="Works">Works</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
