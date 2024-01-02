// Skills.jsx
import SkillCard from "./skillCard/SkillCard";
import { SKILLS } from "../../utils/data";
import "./skills.scss";
import { useState } from "react";
import SkillsInfoCard from "./skillsInfoCard/SkillsInfoCard";




const Skills = () => {

    const [selectSkill, setSelectSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectSkill(data)
    }

  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item, i) => {
            return <SkillCard key={i} iconUrl={item.icon} title={item.title} />;
          })}
        </div>
        <div className="skills-info">
            <SkillsInfoCard
            heading={selectSkill.title}
            skills={selectSkill.skills}
            />
        </div>
      </div>
    </section>
  );
};

export default Skills;
