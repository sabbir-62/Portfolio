
import "./projectDetails.scss";
import { motion } from 'framer-motion';





const HICDetails = () => {

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
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> After submitting data for registration, a confirmation mail is sent to the user's email.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> The user needs to verify this email before completing the registration process.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> After successfully registration, the user needs to login.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> Users can read the Quran, Hadith and Dua.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>6.</span> They can buy programs and services. They also can join the islamic events.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>7.</span> Users can donate money.</motion.p>
        </div>
        <div className="challenges">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Challenges <span>& Learn</span></motion.h1>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> I could not send an confirmation email to the user's email. So I learned how to send link to the mail and user verification by the link.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> I learned to reset a user's password functionality using email.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> Learn how to pass user data from one child component to another child component using the context API.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> Developed authentication using passport js was challenging for me because i don't know how to use it.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> Clover payment gateway integration was also a big challenge. For the first time i integrate a payment gateway.</motion.p>
        </div>
        <div className="live-link">Live Link: <a href="https://hicny.org/">  https://hicny.org/</a></div>
      </div>
    </div>
  );
};

export default HICDetails;
