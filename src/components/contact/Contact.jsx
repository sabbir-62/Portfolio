import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';


//Variant Object
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};


/*----------Contact Component----------*/
const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0g9hrve', 'template_gtxisgk', formRef.current, '-EEUZ92SfTCI3Yamg')
      .then((result) => {
        console.log("result", result);
          setSuccess(true)
      }, (error) => {
        console.log('error', error);
          setError(true)
      });
  };





//Return JSX
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work <span>Together</span></motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>sabbir.hossain.se62@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Fulbari Hat, Birol, Dinajpur, Bangladesh</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+8801729892494</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg viewBox="0 0 512 512">
            <g>
              <motion.path
                strokeWidth={2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M424.044,440.897l-52.83-52.839c-7.67-7.67-20.114-7.67-27.802,0l-23.966,23.984
		c-6.997,6.996-18.121,7.696-25.942,1.638c0,0-22.92-15.109-60.403-52.591c-37.482-37.482-52.591-60.412-52.591-60.412
		c-6.058-7.82-5.349-18.927,1.648-25.942l23.966-23.958c7.688-7.679,7.688-20.131,0-27.81l-52.83-52.83
		c-7.678-7.679-20.113-7.679-27.801,0c-0.177,0.177-2.851,2.86-31.858,31.867c-33.788,33.78,10.903,137.279,86.078,212.472
		c75.185,75.176,178.694,119.858,212.473,86.088c29.006-29.024,31.68-31.698,31.858-31.875
		C431.731,461.02,431.731,448.567,424.044,440.897z"
              />
              <motion.path
                strokeWidth={2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M368.122,179.65l18.237-2.87c-6.767-42.84-26.659-84.077-59.677-117.094
		C293.655,26.659,252.41,6.758,209.578,0l-2.87,18.236c39.156,6.191,76.708,24.303,106.919,54.505
		C343.82,102.942,361.931,140.503,368.122,179.65z"
              />
              <motion.path
                strokeWidth={2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M310.793,188.711l18.236-2.869c-4.88-31.15-19.334-61.156-43.344-85.167
		c-24.019-24.01-54.026-38.456-85.166-43.353l-2.869,18.244c27.455,4.322,53.795,16.987,74.98,38.164
		C293.805,134.924,306.48,161.246,310.793,188.711z"
              />
              <motion.path
                strokeWidth={2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M253.375,197.798l18.228-2.896c-3.083-19.387-12.134-38.093-27.093-53.052
		c-14.951-14.951-33.656-24.002-53.052-27.093l-2.906,18.227c15.72,2.525,30.768,9.786,42.902,21.92
		C243.588,167.038,250.86,182.086,253.375,197.798z"
              />
            </g>
          </svg>
        </motion.div>
        <motion.form
        ref={formRef}
        onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" name="name" placeholder="Enter Your Name" />
          <input type="email" name="email" placeholder="Enter Your Email" />
          <textarea rows={8} name="message" placeholder="Message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};


//Export Contact component
export default Contact;
