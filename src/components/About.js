import { Element } from "react-scroll";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const AboutMe = () => {
  return (
    <Element name="about">
      <AboutContainer>
        <GlowingEffect />
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <AboutCard
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 30px rgba(138, 43, 226, 0.8)" }}
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I&apos;m <span>Mahesh Kale</span>, a passionate <strong>Full-Stack Developer</strong>{" "}
            specializing in <strong>Python, Java, React, Next.js, Django, and SQL</strong>. I love crafting scalable web
            solutions and pushing the boundaries of user experience with futuristic designs.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Currently pursuing my <strong>B.E in Computer Science & Engineering</strong>, I have hands-on
            experience with <strong>Elite Softwares</strong> and have built projects like <strong>Woodex E-commerce</strong>, enhancing my ability to create
            real-world solutions through technology.
          </motion.p>
        </AboutCard>
      </AboutContainer>
    </Element>
  );
};

export default AboutMe;

const neonGlow = keyframes`
  0% { box-shadow: 0px 0px 15px #8a2be2; }
  50% { box-shadow: 0px 0px 25px #ff4500; }
  100% { box-shadow: 0px 0px 15px #8a2be2; }
`;

const AboutContainer = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: radial-gradient(circle, rgba(10,10,10,1) 10%, rgba(20,20,30,1) 100%);
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
`;

const GlowingEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(10,10,10,1) 10%, rgba(20,20,30,1) 100%);
  z-index: -1;
  animation: ${neonGlow} 3s infinite alternate;
`;

const AboutCard = styled(motion.div)`
  max-width: 850px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  backdrop-filter: blur(12px);
  box-shadow: 0px 0px 20px rgba(138, 43, 226, 0.6);
  transition: all 0.3s ease-in-out;
  border: 2px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  animation: ${neonGlow} 3s infinite alternate;

  @media (max-width: 768px) {
    padding: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
    color: #ddd;
    margin-bottom: 15px;
    text-align: justify;

    span {
      color: #8a2be2;
      font-weight: bold;
    }

    strong {
      color: #ff4500;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;