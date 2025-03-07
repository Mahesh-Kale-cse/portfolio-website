import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const NavCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    background: rgba(18, 18, 18, 0.9);
    padding: 20px 0;
    text-align: center;
    transition: left 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #8a2be2;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff4500;
    text-shadow: 0px 0px 12px #ff4500;
  }
`;

const HomeLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #8a2be2;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff4500;
    text-shadow: 0px 0px 12px #ff4500;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <NavbarContainer>
      <MenuIcon onClick={toggleMenu}>{open ? <FaTimes /> : <FaBars />}</MenuIcon>

      <NavCenter>
        <NavLinks open={open}>
          {/* Redirect Home to "/" */}
          <HomeLink href="/">Home</HomeLink>
          <NavLink to="about" smooth duration={500} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="skills" smooth duration={500} onClick={() => setOpen(false)}>Skills</NavLink>
          <NavLink to="projects" smooth duration={500} onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="contact" smooth duration={500} onClick={() => setOpen(false)}>Contact</NavLink>
        </NavLinks>
      </NavCenter>
    </NavbarContainer>
  );
}
