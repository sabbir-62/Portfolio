import { Link } from "react-router-dom";
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
                <h4>2018 - 2023</h4>
                <h3>BSc (Engineering) in Electronics & Communication Engineering (ECE)</h3>
                <p>Institute: <span>Hajee Mohammad Danesh Science and Technology University, Dinajpur, Bangladesh</span></p>
                <p>CGPA: <span>3.320 out of 4.00</span></p>
              </div>
              <div className="box">
                <h4>2014 - 2016</h4>
                <h3>Higher Secondary Certificate (HSC)</h3>
                <p>Institute: <span>Mainul Hasan College, Birol, Dinajpur, Bangladesh</span></p>
                <p>GPA: <span>5.00 out of 5.00</span></p>
              </div>
              <div className="box">
                <h4>2012 - 2014</h4>
                <h3>Secondary School Certificate (SSC)</h3>
                <p>Institute: <span>Mohana Mangalpur High School, Birol, Dinajpur, Bangladesh</span></p>
                <p>GPA: <span>5.00 out of 5.00</span></p>
              </div>
            </div>
          </div>

          <div className="col">
            <header className="title">
              <h2>EXPERIENCE</h2>
            </header>

            <div className="contents">
              <div className="box">
              <h4>2024 - Present</h4>
                <h3>Topofstacksoftware.com</h3>
                <p>Technology: <span>I am using Next.js, Nest.js and Postgresql for building website</span></p>
                <p>Projects: <span>Melbournelimolink, Permisgo, HICNY, MuslimBangla</span></p>
              </div>

              <div className="box">
              <h4>2022 - 2023</h4>
                <h3>Web Development</h3>
                <p>Technology: <span>I have learned HTML, CSS, Bootstrap, and JavaScript</span></p>
                <p>Projects: <span>HSTU Alumni Association, Blog Project, Social Book, Personal Portfolio</span></p>
              </div>

              <div className="box">
              <h4>2021 - 2022</h4>
                <h3>Problem Solving</h3>
                <p>Language: <span>C, C++, JavaScript</span></p>
                <p>Online Judge: <span>URI, UVA</span></p>
              </div>
            </div>
          </div>
        </motion.main>
      </div>
  );
};

export default Education;
