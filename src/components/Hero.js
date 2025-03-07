import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const phrases = [
  "Turning Ideas into Reality...",
  "Building Scalable Web Solutions...",
  "Crafting Next-Gen Experiences...",
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting && charIndex < currentPhrase.length) {
        setCurrentText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setCharIndex(0);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <HeroContainer id="home">
      <BackgroundEffect />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span>Hi, I&apos;m Mahesh...</span>
      </motion.h1>
      <TypingEffect>{currentText}</TypingEffect>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
      </motion.h2>

      <ButtonContainer>
        <motion.a
          whileHover={{ scale: 1.2, boxShadow: "0 0 20px #8a2be2" }}
          whileTap={{ scale: 0.9 }}
          href="#contact"
        >
          Contact Me
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, boxShadow: "0 0 20px #ff4500" }}
          whileTap={{ scale: 0.9 }}
          href="Mahesh_Resume.pdf"
          download
        >
          Download Resume
        </motion.a>
      </ButtonContainer>

      <IconsContainer>
        <FloatingIcon
          as={motion.a}
          whileHover={{ scale: 1.5, rotate: 360 }}
          href="https://github.com"
          target="_blank"
        >
          <FaGithub />
        </FloatingIcon>
        <FloatingIcon
          as={motion.a}
          whileHover={{ scale: 1.5, rotate: 360 }}
          href="https://linkedin.com"
          target="_blank"
        >
          <FaLinkedin />
        </FloatingIcon>
        <FloatingIcon
          as={motion.a}
          whileHover={{ scale: 1.5, rotate: 360 }}
          href="mailto:mahesh@example.com"
        >
          <FaEnvelope />
        </FloatingIcon>
      </IconsContainer>
    </HeroContainer>
  );
};

export default HeroSection;

const glowing = keyframes`
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
  100% { opacity: 0.3; transform: scale(1); }
`;

const BackgroundEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(10,10,10,1) 10%, rgba(20,20,30,1) 100%);
  z-index: -1;
  animation: ${glowing} 5s infinite alternate;
`;

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
`;

const TypingEffect = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  min-height: 40px;
  background: linear-gradient(90deg, #8a2be2, #ff4500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;

  a {
    padding: 12px 24px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background: linear-gradient(135deg, #6d28d9, #ff4500);
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px #6d28d9;
    
    &:hover {
      background: linear-gradient(135deg, #ff4500, #6d28d9);
      box-shadow: 0 0 20px #ff4500;
    }
  }
`;

const IconsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
`;

const FloatingIcon = styled.div`
  font-size: 36px;
  color: #8a2be2;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ff4500;
  }
`;
