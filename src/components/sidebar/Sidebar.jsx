import { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss"
import ToggoleButton from "./toggleButton/ToggoleButton";
import { motion } from 'framer-motion';


/*-----------Sidebar component----------*/
const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed:{
            clipPath : "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 50
            }
        }
    }
    return (
        <motion.div className="sidebar" animate={open?"open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggoleButton setOpen={setOpen}/>
        </motion.div>
    );
};

export default Sidebar;