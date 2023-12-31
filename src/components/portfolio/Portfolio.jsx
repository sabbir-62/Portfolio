import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import alumni from "../../assets/hstu-alumni.png";
import blog from "../../assets/blog.png";

const items = [
  {
    id: 1,
    title: "Blog Website",
    image: blog,
    description:
      "The blog website presents a well-organized and visually appealing platform with diverse content spanning technology, lifestyle, science, and entertainment.",
  },
  {
    id: 2,
    title: "HSTU Alumni Website",
    image: alumni,
    description: "The varsity alumni association serves as a vibrant network connecting graduates, fostering a sense of camaraderie among former students.",
  },
];

const Item = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 250]);

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
            <button>Details</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
