import { useRef } from "react";
import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"

const Parallax = ({type}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start start", "end start"]
    })

    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "250%"])
    const ybg = useTransform(scrollYProgress, [0,1], ["0%", "550%"])


    return (
        <motion.div className="parallax" ref={ref}>
            <motion.h1 style={{y: yBg}}>{type==="about" ? "About" : "Education"}</motion.h1>
        </motion.div>
    );
};

export default Parallax;