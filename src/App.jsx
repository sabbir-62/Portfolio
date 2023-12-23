
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About"><Parallax type="about"/></section>
      <section>Education</section>
      <section id="Education"><Parallax type="education"/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section id="Skills">Skills</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
