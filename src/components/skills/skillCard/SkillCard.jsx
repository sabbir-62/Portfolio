import "./skillCard.scss"

const SkillCard = ({iconUrl, title, isActive, onClick}) => {
    return (
        <div className={`skills-card ${isActive ? "active" : ""} `} onClick={() => onClick()}>
            <div className="skill-icon">
                <img src={iconUrl} alt={""}/>
            </div>

            <span>{title}</span>
            
            
        </div>
    );
};

export default SkillCard;