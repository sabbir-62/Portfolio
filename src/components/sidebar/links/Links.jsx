import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "About", "Education", "Skills", "Works", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, i) => (
        <motion.a href={`#${item}`} style={{textTransform:"uppercase"}} key={i} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale: 0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
