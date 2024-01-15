
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
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> Users can register and log in.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> After submitting data for registration, a token is sent to the user's email.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> The user needs to verify this token to complete the registration process.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> After successfully registration, the user needs to login.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> After logging in, the user can see their profile.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>6.</span> Users read other posts details.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>7.</span> The user can create a new post, update it, and delete their own post.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>8.</span> Users can search posts by category.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>9.</span> Users can find other users and send friend requests.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>10.</span> Users can accept or delete other requests.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>11.</span> Users can comment on others posts.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>12.</span> Users can log out.</motion.p>
        </div>
        <div className="challenges">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Challenges <span>& Learn</span></motion.h1>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> I learned how to work on a collaborative project.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> Study more on git and github.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> I learned how to work with more branches and merge code with the main branch.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> For real-time chatting, I studied at Socket.io.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> I learned how to work with references in different collections.</motion.p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaProjectDetails;
