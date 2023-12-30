import "./hero.scss";
import hero from "../../assets/sabbir.png";
import { motion } from 'framer-motion';
import TextAnimation from "./TextAnimation";

const textVariant = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0
    },
    animate:{
        x: "-210%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30
        }
    }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariant} initial="initial" animate="animate">
          <motion.h1 variants={textVariant} initial="initial" animate="animate">Hello, I'm <span className="name">Sabbir Hossain</span></motion.h1>
          <motion.h2 variants={textVariant} initial="initial" animate="animate"><TextAnimation /></motion.h2>
          <motion.div className="buttons" variants={textVariant} initial="initial" animate="animate">
            <motion.a href="" className="button" variants={textVariant} initial="initial" animate="animate">Download Resume</motion.a>
            <motion.a href="#Contact" className="button" variants={textVariant} initial="initial" animate="animate">Let's Talk</motion.a>
        </motion.div>
        </motion.div>
        
      </div>
      <motion.div className="slideTextContainer" variants={sliderVariants} initial="initial" animate= "animate">
        A Full Stack Web Developer
      </motion.div>
      {/* <motion.div className="imageContainer" variants={textVariant} initial="initial" animate="animate">
        <img src={hero} alt="Hero image"/>
      </motion.div> */}
    </div>
  );
};

export default Hero;
