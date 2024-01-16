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
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> Users can register and log in.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> After submitting data for registration, an OTP is sent to the user's email.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> The user needs to verify this otp before completing the registration process.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> After successfully registration, the user needs to login.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> After logging in, users can see all blogs.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>6.</span> Users read others blog details.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>7.</span> The user can create a new blog, update it, and delete it.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>8.</span> Users can search blogs by category.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>9.</span> Users can log out.</motion.p>
        </div>
        <div className="challenges">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Challenges <span>& Learn</span></motion.h1>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> I could not send an OTP to the user's email. So I learned how to send OTPs to the mail and user verification by OTP.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> I learned to reset a user's password functionality using email.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> Learn how to pass user data from one child component to another child component using the context API.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> Learn about framer motion library.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> Learn how to search blogs by their category.</motion.p>
        </div>
        <div className="live-link">Live Link: <a href="https://blog-project-with-mern-zhwk.vercel.app/">  https://blog-project-with-mern-zhwk.vercel.app/</a></div>
      </div>
    </div>
  );
};

export default BlogProjectDetails;
