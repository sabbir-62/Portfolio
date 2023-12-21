import "./hero.scss";
import hero from "../../assets/sabbir.png";
import { motion } from 'framer-motion';

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
          <motion.h1 variants={textVariant} initial="initial" animate="animate">Hello, I'm Sabbir Hossain</motion.h1>
          <motion.h2 variants={textVariant} initial="initial" animate="animate">Full Stack Web Developer</motion.h2>
        </motion.div>
      </div>
      <motion.div className="slideTextContainer" variants={sliderVariants} intial="initial" animate= "animate">
        A Full Stack Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src={hero} alt="Hero image" />
      </div>
    </div>
  );
};

export default Hero;