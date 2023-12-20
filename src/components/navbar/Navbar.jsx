import { Link } from "react-router-dom";
import "./navbar.scss"
import facebook from "../../assets/facebook.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";



const Navbar = () => {
    return (
        <div className="navbar">
        <Sidebar />
         <div className="wrapper">
            <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}></motion.span>
            <div className="social">
                <Link><img src={facebook} alt="" /></Link>
                <Link><img className="github" src={github} alt="" /></Link>
                <Link><img src={linkedin} alt="" /></Link>
            </div>
         </div>
        </div>
    );
};

export default Navbar;