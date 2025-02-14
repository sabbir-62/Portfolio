

import "./projectDetails.scss";
import { motion } from 'framer-motion';


const MLLDetails = () => {

  const textVariant = {
    initial: {
        x: -200,
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


  return (
    <div className="common-container">

      <div className="text-container">
        <div className="key-features">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Key <span>Features</span></motion.h1>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> Users can register and log in.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> After successfully registration, the user needs to login.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> Users book car services.</motion.p>
        </div>
        <div className="challenges">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Challenges <span>& Learn</span></motion.h1>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> Learned how to work with cookies for user login and registration.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> Booking calculation was very challenging. There was many logics to calculate total service price like early morning surcharge, late night surcharge, with gst, without gst, discount etc.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> I had faced an issue when i was working with booking time. The server time and client time were different. Then i solved it using moment.js</motion.p>
        </div>
        <div className="live-link">Live Link: <a href="https://melbournelimolink.com.au/">  https://melbournelimolink.com.au/</a></div>
      </div>
    </div>
  );
};

export default MLLDetails;
