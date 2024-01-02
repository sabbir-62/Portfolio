// Skills.jsx
import SkillCard from "./skillCard/SkillCard";
import { SKILLS } from "../../utils/data";
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item, i) => {
            return <SkillCard key={i} iconUrl={item.icon} title={item.title} />;
          })}
        </div>
        <div className="skills-info"></div>
      </div>
    </section>
  );
};

export default Skills;
