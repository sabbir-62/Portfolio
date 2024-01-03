// Skills.jsx
import SkillCard from "./skillCard/SkillCard";
import { SKILLS } from "../../utils/data";
import "./skills.scss";
import { useState } from "react";
import SkillsInfoCard from "./skillsInfoCard/SkillsInfoCard";
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



const Skills = () => {
  const [selectSkill, setSelectSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectSkill(data);
  };

  return (
    <section className="skills-container">
      <motion.h5 variants={headerVariant} initial="initial" whileInView="animate">My <span>Skills</span></motion.h5>
      <div className="skills-content">
        <motion.div className="skills" variants={textVariant} initial="initial" whileInView="animate">
          {SKILLS.map((item, i) => {
            return (
              <SkillCard
                key={i}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            );
          })}
        </motion.div>
        <motion.div className="skills-info" variants={textVariant} initial="initial" whileInView="animate">
          <SkillsInfoCard
            heading={selectSkill.title}
            skills={selectSkill.skills}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
