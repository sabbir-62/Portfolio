
import "./projectDetails.scss";
import { motion } from 'framer-motion';





const PermisgoDetails = () => {

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
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> Students and Teachers can register and log in.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>2.</span> After submitting data for registration, a token is sent to the user's email.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>3.</span> The users need to verify this token to complete the registration process.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>4.</span> After login Teachers and Students can see different dashboards.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>5.</span> There are two types of test, mock and simple. Student can play mcq test and see their result.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>6.</span> They can book a teacher for practical driving.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>7.</span> Teachers can review to students.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>8.</span> For booking a teacher, students need to pay and teachers need to confirm.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>9.</span> If the teacher accepts the request, the student can chat with the teacher.</motion.p>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>10.</span> The teacher will pay for the session.</motion.p>
        </div>
        <div className="challenges">
          <motion.h1 variants={textVariant} initial="initial" whileInView="animate">Challenges <span>& Learn</span></motion.h1>
          <motion.p variants={textVariant} initial="initial" whileInView="animate"><span>1.</span> Quiz section is a bit complex. Two types of exams have different screens. Mock exam have a timer whereas simple exam doesn't have a timer. I was getting problem for using same component for the both exam. </motion.p>
        </div>
        <div className="live-link">Live Link: <a href="https://permisgo.fr/">  https://permisgo.fr/</a></div>
      </div>
    </div>
  );
};

export default PermisgoDetails;
