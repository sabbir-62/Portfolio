import blog1 from "../../../assets/blog/blog1.png";
import blog2 from "../../../assets/blog/blog2.png";
import blog3 from "../../../assets/blog/blog3.png";
import blog5 from "../../../assets/blog/blog5.png";
import blog7 from "../../../assets/blog/blog7.png";
import "./projectDetails.scss";
import { motion } from 'framer-motion';





const BlogProjectDetails = () => {

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
          <img src={blog7} alt="Blog pic" />
        </motion.div>
        <motion.div className="img"  variants={textVariant} initial="initial" whileInView="animate">
          <img src={blog1} alt="Blog pic" />
        </motion.div>
        <motion.div className="img" variants={textVariant} initial="initial" whileInView="animate">
          <img src={blog2} alt="Blog pic" />
        </motion.div>
        <motion.div className="img" variants={textVariant} initial="initial" whileInView="animate">
          <img src={blog3} alt="Blog pic" />
        </motion.div>
        <motion.div className="img" variants={textVariant} initial="initial" whileInView="animate">
          <img src={blog5} alt="Blog pic" />
        </motion.div>
      </div>

      <div className="text-container">
        <div className="key-features">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Key <span>Features</span></motion.h1>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> Users can registration and login.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> After submitting data for registration, an otp sent into user email.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> User need to verified this otp for completing registration process.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> After successfully registration, user need to login.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> After login user can see all blogs.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>6.</span> Users read others blog details.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>7.</span> User create new blog, update and delete their own blog.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>8.</span> Users can search blogs by category.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>9.</span> Users can logout.</motion.p>
        </div>
      </div>
    </div>
  );
};

export default BlogProjectDetails;
