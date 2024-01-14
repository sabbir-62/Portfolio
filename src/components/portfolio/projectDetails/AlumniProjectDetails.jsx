
import alumni1 from "../../../assets/alumni/alumni1.png";
import alumni2 from "../../../assets/alumni/alumni2.png";
import alumni3 from "../../../assets/alumni/alumni3.png";
import alumni4 from "../../../assets/alumni/alumni4.png";
import alumni5 from "../../../assets/alumni/alumni5.png";
import alumni6 from "../../../assets/alumni/alumni6.png";
import "./projectDetails.scss";
import { motion } from 'framer-motion';





const AlumniProjectDetails = () => {

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
    <div className="blog-container">
      <div className="image-container">
        <motion.div className="img"  variants={textVariant} initial="initial" whileInView="animate">
          <img src={alumni1} alt="Alumni pic" />
        </motion.div>
        <motion.div className="img" variants={textVariant} initial="initial" whileInView="animate">
          <img src={alumni2} alt="Alumni pic" />
        </motion.div>
        <motion.div className="img" variants={textVariant} initial="initial" whileInView="animate">
          <img src={alumni3} alt="Alumni pic" />
        </motion.div>
        <motion.div className="img" variants={textVariant} initial="initial" whileInView="animate">
          <img src={alumni4} alt="Alumni pic" />
        </motion.div>
        <motion.div className="img" variants={textVariant} initial="initial" whileInView="animate">
          <img src={alumni5} alt="Alumni pic" />
        </motion.div>
        <motion.div className="img" variants={textVariant} initial="initial" whileInView="animate">
          <img src={alumni6} alt="Alumni pic" />
        </motion.div>
      </div>

      <div className="text-container">
        <div className="key-features">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Key <span>Features</span></motion.h1>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> Users can register and log in.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> After successfully registration, the user needs to login.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> Logged-in users can see their profile.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> Also see the graduates list and posts.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> Logged-in users can create new posts, delete them, and update their own posts.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>6.</span> Users read other posts details.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>7.</span> Users can log out.</motion.p>
        </div>
      </div>
    </div>
  );
};

export default AlumniProjectDetails;
