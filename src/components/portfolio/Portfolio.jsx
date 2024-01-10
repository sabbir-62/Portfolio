import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import alumni from "../../assets/hstu-alumni.png";
import blog from "../../assets/blog.png";
import media from "../../assets/social-media.jpg";
import { useNavigate } from "react-router-dom";

// Items
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
    description:
      "The varsity alumni association serves as a vibrant network connecting graduates, fostering a sense of camaraderie among former students.",
  },
  {
    id: 3,
    title: "Social Book Server",
    image: media,
    description:
      "Social media connects people worldwide, facilitating instant communication and information sharing. However, it also raises concerns about privacy, misinformation, and the impact on mental health.",
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
    if (title === "Blog Website") {
      navigate("/details/blog");
    }
    if (title === "HSTU Alumni Website") {
      navigate("/details/alumni");
    }
    if (title === "Social Book Server") {
      navigate("/details/social-media");
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
