import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import hic from "../../assets/hic.png";
import mll from "../../assets/mll.png";
import permisgo from "../../assets/permisgo.png";
import { useNavigate } from "react-router-dom";

// Items
const items = [
  {
    id: 1,
    title: "Hillside Islamic Center",
    image: hic,
    description:
      "This platform serves as a digital gateway to the heart of the Islamic faith, designed for a New York-based Islamic center. It offers a rich collection of resources, including the Quran, Hadith, and Duas, allowing users to deepen their knowledge and spiritual connection. The website also provides opportunities to enrich the lives of children and their families through educational programs and courses. Additionally, visitors can stay informed about and register for a variety of meaningful Islamic events, fostering a sense of community and spiritual growth.",
  },
  {
    id: 2,
    title: "Melbourne Limolink",
    image: mll,
    description:
      "This platform offers a seamless experience for booking cars with ease. Users can select a vehicle for their desired date, browse through a range of available cars, and explore their detailed specifications. Limolink also features exclusive packages, including options for weddings and tours, designed to elevate any special occasion or journey. Additionally, users can read reviews to ensure they make the best choice for their travel needs.",
  },
  {
    id: 3,
    title: "Permisgo",
    image: permisgo,
    description:
    "This platform serves as an all-encompassing solution for both learning and teaching driving in France. Users can enhance their driving skills through comprehensive lessons, quizzes, and practice tests to achieve the highest scores. Students have the flexibility to book experienced instructors for practical driving lessons, with the option to learn both manual and automatic vehicles. The organization also manages the registration process for the official driving exam, ensuring students are fully supported from enrollment to reaching the exam center for their test.",
  },
];

// animation
const headerVariant = {
  initial: {
    //  x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

// show items
const Item = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 250]);

  // navigate details page
  const navigate = useNavigate();
  const projectDetails = (title) => {
    if (title === "Hillside Islamic Center") {
      navigate("/details/hic");
    }
    if (title === "Melbourne Limolink") {
      navigate("/details/mll");
    }
    if (title === "Permisgo") {
      navigate("/details/permisgo");
    }
  };

  return (
    <section className="portfolioSection">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="Portfolio image" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => projectDetails(item.title)}>Details</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/*----------Portfolio component----------*/
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 100,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.h1
          variants={headerVariant}
          initial="initial"
          whileInView="animate"
        >
          My <span>Works</span>
        </motion.h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
