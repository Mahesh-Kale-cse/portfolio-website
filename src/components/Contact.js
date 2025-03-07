import React, { useState } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("📨 Sending...");

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    };

    emailjs
      .send("service_386ggbs", "template_w7gt3rl", templateParams, "pucOyJbgLsnhB795U")
      .then((result) => {
        console.log("Email sent successfully:", result);
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setStatusMessage("❌ Failed to send message. Try again!");
      })
      .finally(() => {
        setIsSending(false);
        // Hide message after 5 seconds
        setTimeout(() => {
          setStatusMessage("");
        }, 5000);
      });
  };

  return (
    <ContactContainer>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <ContactForm onSubmit={sendEmail}>
        <Input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></Textarea>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #ff4500" }}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </SubmitButton>
      </ContactForm>

      {statusMessage && <StatusMessage>{statusMessage}</StatusMessage>}

      <ContactInfo>
        <ContactItem>
          <FaEnvelope /> mahesh.kale.cse@gmail.com
        </ContactItem>
        <ContactItem>
          <FaPhone /> +91 9922871592
        </ContactItem>
        <SocialIcons>
          <SocialLink href="https://linkedin.com/in/your-profile" target="_blank">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://github.com/your-github" target="_blank">
            <FaGithub />
          </SocialLink>
        </SocialIcons>
      </ContactInfo>
    </ContactContainer>
  );
};

export default ContactSection;

// 🌟 Styled Components
const glowingEffect = keyframes`
  0% { box-shadow: 0px 0px 10px #8a2be2; }
  50% { box-shadow: 0px 0px 20px #ff4500; }
  100% { box-shadow: 0px 0px 10px #8a2be2; }
`;

const ContactContainer = styled.section.attrs({
  id: "contact",
})`
  height: auto;
  padding: 100px 40px;
  text-align: center;
  background: radial-gradient(circle, rgba(10,10,10,1) 10%, rgba(20,20,30,1) 100%);
  color: white;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 500px;
  margin: 30px auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px #8a2be2;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px #ff4500;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #8a2be2, #ff4500);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  animation: ${glowingEffect} 3s infinite alternate;

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p`
  margin-top: 10px;
  font-size: 1.1rem;
  color: #8a2be2;
`;

const ContactInfo = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 1.2rem;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #ddd;
  margin: 10px 0;
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  font-size: 2rem;
  color: #8a2be2;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff4500;
  }
`;
