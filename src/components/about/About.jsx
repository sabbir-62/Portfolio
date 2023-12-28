import "./about.scss";
import sabbir from "../../assets/sabbir2.png";

const About = () => {
  return (
    <div className="about">
      <div className="box">
        <div className="header">
          About <span>Me</span>
        </div>
        <img src={sabbir} alt="" />
        <h1>Full Stack Web Developer</h1>
        <p>
          Hi, I'm a MERN Full Stack Web Developer. I like building
          websites using MongoDB, Express.js, React, and Node.js. I find joy in
          solving problems, especially when working together with others. Making
          websites that people find easy and enjoyable to use is my goal. I have
          experience creating different parts of websites, both the visible
          parts that users see and the behind-the-scenes stuff. I'm excited to
          be part of projects that are creative and innovative. Let's team up
          and bring some awesome ideas to life on the web!
        </p>
      </div>
    </div>
  );
};

export default About;
