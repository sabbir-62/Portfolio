
import blog1 from "../../../assets/blog/blog1.png";
import blog2 from "../../../assets/blog/blog2.png";
import blog3 from "../../../assets/blog/blog3.png";
import blog4 from "../../../assets/blog/blog4.png";
import blog5 from "../../../assets/blog/blog5.png";
import "./projectDetails.scss";
import { motion } from 'framer-motion';





const SocialMediaProjectDetails = () => {

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
      <div className="text-container">
        <div className="key-features">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Key <span>Features</span></motion.h1>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> Users can registration and login.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> After submitting data for registration, an token sent into user email.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> User need to verified this token for completing registration process.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> After successfully registration, user need to login.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> After login user can see their profile.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>6.</span> Users read others post details.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>7.</span> User create new post, update and delete their own post.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>8.</span> Users can search post by category.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>9.</span> Users can find other users and send friend request.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>10.</span> Users cna accept or delete others request.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>11.</span> Users can comment on others post.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>12.</span> Users can logout.</motion.p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaProjectDetails;
