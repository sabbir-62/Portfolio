import frontEnd from "../assets/front-end.png";
import backend from "../assets/backend.png";
import tools from "../assets/tools.png";
import softSkills from "../assets/soft-skills.png";

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontEnd,
        skills: [
            {skill: "HTML5", percentage: "80%"},
            {skill: "CSS3 {Sass/SCSS}", percentage: "70%"},
            {skill: "JavaScript", percentage: "65%"},
            {skill: "React.js", percentage: "70%"},
        ]
    },
    {
        title: "Backend",
        icon: backend,
        skills: [
            {skill: "Node.js", percentage: "70%"},
            {skill: "Express.js", percentage: "65%"},
            {skill: "MongoDB", percentage: "70%"}
        ]
    },
    {
        title: "Tools",
        icon: tools,
        skills: [
            {skill: "Git & GitHub", percentage: "85%"},
            {skill: "Visual Studio Code", percentage: "75%"},
            {skill: "Webpack", percentage: "60%"},
            {skill: "Responsive Design", percentage: "80%"},
        ]
    },
    {
        title: "Soft Skills",
        icon: softSkills,
        skills: [
            {skill: "Problem Solving", percentage: "70%"},
            {skill: "Collaboration", percentage: "90%"},
            {skill: "Attention to Details", percentage: "75%"},
        ]
    }
]