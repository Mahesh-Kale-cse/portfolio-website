import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { FaReact, FaPython, FaDatabase, FaGitAlt, FaJava, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiJavascript, SiPostgresql, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";

// Skill categories
const skills = [
  {
    category: "Programming Languages",
    list: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <FaDatabase /> }
    ]
  },
  {
    category: "Web Development",
    list: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Django", icon: <SiDjango /> }
    ]
  },
  {
    category: "Databases",
    list: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> }
    ]
  },
  {
    category: "Version Control & Tools",
    list: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> }
    ]
  }
];

const SkillsSection = () => {
  return (
    <SkillsContainer>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills & Technologies
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="skills-intro"
      >
      </motion.p>
      
      <SkillsWrapper>
        {skills.map((section, index) => (
          <Category key={index}>
            <h3>{section.category}</h3>
            <SkillsGrid>
              {section.list.map((skill, idx) => (
                <SkillCard
                  key={idx}
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #8a2be2" }}
                >
                  {skill.icon}
                  <p>{skill.name}</p>
                </SkillCard>
              ))}
            </SkillsGrid>
          </Category>
        ))}
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;

// 🔹 Neon Glow Animation
const neonGlow = keyframes`
  0% { box-shadow: 0px 0px 10px #8a2be2; }
  50% { box-shadow: 0px 0px 20px #ff4500; }
  100% { box-shadow: 0px 0px 10px #8a2be2; }
`;

// 🔹 Smooth Scrolling Applied
const SkillsContainer = styled.section.attrs({
  id: "skills", // ✅ Ensures smooth scrolling works
})`
  height: auto;
  padding: 100px 40px;
  text-align: center;
  background: radial-gradient(circle, rgba(10,10,10,1) 10%, rgba(20,20,30,1) 100%);
  color: white;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Category = styled.div`
  text-align: center;
  width: 100%;

  h3 {
    font-size: 1.8rem;
    background: linear-gradient(90deg, #8a2be2, #ff4500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 25px;
    text-transform: uppercase;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.12);
  padding: 18px 30px;
  border-radius: 12px;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  animation: ${neonGlow} 3s infinite alternate;
  min-width: 170px;

  svg {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #8a2be2;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;
