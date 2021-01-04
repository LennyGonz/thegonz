import styled from 'styled-components';
import { Link } from 'gatsby';
import { IoFolderOpenSharp, IoHome } from "react-icons/io5";
import { GiGearHammer } from "@react-icons/all-files/gi/GiGearHammer";
import { FaUserAstronaut } from "@react-icons/all-files/fa/FaUserAstronaut";
import { SiLinkedin, SiGithub } from "react-icons/si";

export const Nav = styled.nav`
  background: #181818;
  height: 100vh;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  top: 0;

  @media screen and (min-width: 360px) and (max-width: 896px) {
    width: 100vw;
    height: 60px;
    flex-direction: row;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 60px;

  @media screen and (min-width: 360px) and (max-width: 896px) {
    width: 100vw;
    height: 60px;
    flex-direction: row;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background: #070707;
`;

export const Logo = styled.img`
  height: 55px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (min-width: 360px) and (max-width: 896px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;

    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  height: 30%;
  font-size: 1%.75em;
color: #ffffff;
  @media screen and (min-width: 360px) and (max-width: 896px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: pink;
    border-bottom: 3px solid #01bf71;
  }
`;

export const HomeBtn = styled(IoHome)`
  font-size: 1.5em;
  color: #ffffff;
`;
export const AboutBtn = styled(FaUserAstronaut)`
  font-size: 1.5em;
  color: #ffffff;
`;
export const SkillsBtn = styled(GiGearHammer)`
  font-size: 1.75em;
  color: #ffffff;
`;
export const ProjectBtn = styled(IoFolderOpenSharp)`
  font-size: 1.5em;
  color: #ffffff;
`;

export const LinksMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  height: 10%;

  @media screen and (min-width: 360px) and (max-width: 896px) {
    display: none;
  }
`;

export const LinksItem = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const LinkedIn = styled(SiLinkedin)`
  font-size: 1.75em;
  color: #ffffff;
`;

export const Github = styled(SiGithub)`
  font-size: 1.75em;
  color: #ffffff;
`;
