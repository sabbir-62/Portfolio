import "./education.scss";
import { motion } from 'framer-motion';


const textVariant = {
    initial: {
        x: -300,
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


const headerVariant = {
    initial: {
        //  x: -500,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 2,
            staggerChildren: 0.1
        }
    }
}

const Education = () => {
  return (
      <div className="education-container">
		<motion.h1 variants={headerVariant} initial="initial" whileInView="animate">Education & <span>Experience</span></motion.h1>
        <motion.main className="row" variants={textVariant} initial="initial" whileInView="animate">
          <div className="col">
            <header className="title">
              <h2>EDUCATION</h2>
            </header>

            <div className="contents">
              <div className="box">
                <h4>2018 - 2022</h4>
                <h3>High School Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="box">
                <h4>2018 - 2022</h4>
                <h3>Bachelor's Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="box">
                <h4>2018 - 2022</h4>
                <h3>Master Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <header className="title">
              <h2>EXPERIENCE</h2>
            </header>

            <div className="contents">
              <div className="box">
                <h4>2018 - 2022</h4>
                <h3>UI/UX Designer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="box">
                <h4>2018 - 2022</h4>
                <h3>Full-Stack Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="box">
                <h4>2018 - 2022</h4>
                <h3>Frontend Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </motion.main>
      </div>
  );
};

export default Education;
