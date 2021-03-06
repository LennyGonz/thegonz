import React from 'react';
import { FaBars } from 'react-icons/fa';
import LogoImg from '../../images/teddy-bear.png';
//import { SiLinkedin, SiGithub } from "react-icons/si";
// import { IoFolderOpenSharp, IoHome, IoMenu } from "react-icons/io5";
// import { GiGearHammer } from "@react-icons/all-files/gi/GiGearHammer";
// import { FaUserAstronaut } from "@react-icons/all-files/fa/FaUserAstronaut";
import { AboutBtn, Github, HomeBtn, LinksMenu, LinksItem, LinkedIn, LogoContainer, Logo, MobileIcon, Nav, NavLink, NavItem, NavMenu, NavbarContainer, ProjectBtn, SkillsBtn } from './NavbarElements';

const NavBar = ({ open, setOpen }) => {
  return (
    <Nav>
      <NavbarContainer>
        <LogoContainer to="/">
          <Logo src={ LogoImg } alt="bebe oso - logo" />
        </LogoContainer>
        <MobileIcon>
          <FaBars open={open} onClick={() => setOpen(!open)} />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLink to="/" activeClassName="active" >
              <HomeBtn />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" activeClassName="active" >
              <AboutBtn />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/skills" activeClassName="active" >
              <SkillsBtn />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects" activeClassName="active" >
              <ProjectBtn />
            </NavLink>
          </NavItem>
        </NavMenu>

        <LinksMenu>
          <LinksItem>
            <LinkedIn />
          </LinksItem>
          <LinksItem>
            <Github />
          </LinksItem>
        </LinksMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar;
