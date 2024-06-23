import "./hero.scss";
import hero from "../../assets/sabbir.png";
import { motion } from 'framer-motion';
import TextAnimation from "./TextAnimation";
import resume from "../../assets/FullStack_Developer_Sabbir_Hossain_Resume.pdf"

const textVariant = {
    initial: {
        x: -300,
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
        x: "-220%",
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
        <motion.div className="textContainer" variants={textVariant} initial="initial" whileInView="animate">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Hello, I'm <span className="name">Sabbir Hossain</span></motion.h1>
          <motion.h2 variants={textVariant} initial="initial" whileInView="animate"><TextAnimation /></motion.h2>
          <motion.div className="buttons" variants={textVariant} initial="initial" whileInView="animate">
            <motion.a href={resume} download="Resume" className="button" >Download Resume</motion.a>
            <motion.a href="#Contact" className="button" >Let's Talk</motion.a>
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
