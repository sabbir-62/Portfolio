import "./hero.scss";
import hero from "../../assets/sabbir.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h1>Hello, I'm Sabbir Hossain</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
      </div>
      <div className="imageContainer">
        <img src={hero} alt="Hero image" />
      </div>
    </div>
  );
};

export default Hero;
