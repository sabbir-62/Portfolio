import "./about.scss";
import sabbir from "../../assets/sabbir2.png";
import { motion } from 'framer-motion';

const About = () => {

  const textVariant = {
    initial: {
        //  x: -500,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 2,
            staggerChildren: 0.1
        }
    }
}
  return (
    <motion.div className="about" variants={textVariant} initial="initial" whileInView="animate">
      <motion.div className="box" variants={textVariant} initial="initial" whileInView="animate">
        <motion.div className="header" variants={textVariant} initial="initial" whileInView="animate">
          About <span>Me</span>
        </motion.div>
        <motion.img src={sabbir} alt=""  variants={textVariant} initial="initial" whileInView="animate"/>
        <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Full Stack Web Developer</motion.h1>
        <motion.p variants={textVariant} initial="initial" whileInView="animate">
          Hi, I'm a Full Stack Web Developer. I like building
          websites using React.Js, Next.Js, TailwindCSS, Node.Js, Nest.Js, Express.Js, MongoDB and PostgreSQL. I find joy in
          solving problems, especially when working together with others. Making
          websites that people find easy and enjoyable to use is my goal. I have
          experience creating different parts of websites, both the visible
          parts that users see and the behind-the-scenes stuff. I'm excited to
          be part of projects that are creative and innovative. Let's team up
          and bring some awesome ideas to life on the web!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
