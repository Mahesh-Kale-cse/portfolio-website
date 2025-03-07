import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { FaLaptopCode, FaShoppingCart, FaBriefcase, FaBrain, FaMoneyBillWave } from "react-icons/fa";

const projects = [
  {
    title: "Expense Tracker Desktop App",
    icon: <FaMoneyBillWave />,
    description: "A desktop application for tracking daily expenses with analytics and visualization."
  },
  {
    title: "Smart Attendance System using Face Recognition",
    icon: <FaBrain />,
    description: "AI-powered system that automates attendance tracking using facial recognition."
  },
  {
    title: "Advanced E-Commerce Website",
    icon: <FaShoppingCart />,
    description: "A feature-rich e-commerce platform built with Next.js and Django."
  },
  {
    title: "Job Portal Web App",
    icon: <FaBriefcase />,
    description: "A job search and recruitment platform with resume filtering and user dashboards."
  },
  {
    title: "AI-Powered Resume Analyzer",
    icon: <FaLaptopCode />,
    description: "A deep learning-based tool that analyzes resumes and provides improvement suggestions."
  }
];

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #8a2be2" }}
          >
            <IconContainer>{project.icon}</IconContainer>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;

const glowingBorder = keyframes`
  0% { box-shadow: 0px 0px 10px #8a2be2; }
  50% { box-shadow: 0px 0px 20px #ff4500; }
  100% { box-shadow: 0px 0px 10px #8a2be2; }
`;

const ProjectsContainer = styled.section.attrs({
  id: "projects", // ✅ Enables smooth scrolling to this section
})`
  height: auto;
  padding: 100px 40px;
  text-align: center;
  background: radial-gradient(circle, rgba(10,10,10,1) 10%, rgba(20,20,30,1) 100%);
  color: white;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 40px auto;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 0px 15px rgba(138, 43, 226, 0.5);
  animation: ${glowingBorder} 3s infinite alternate;
  transition: all 0.3s ease-in-out;

  h3 {
    font-size: 1.5rem;
    color: #8a2be2;
  }

  p {
    font-size: 1rem;
    color: #ddd;
    margin-top: 10px;
  }
`;

const IconContainer = styled.div`
  font-size: 2rem;
  color: #ff4500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 10px #ff4500;
  margin: 0 auto 15px;
`;