import styled from 'styled-components';
import { FaUserAstronaut } from "@react-icons/all-files/fa/FaUserAstronaut";
import { IoFolderOpenSharp, IoHome } from "react-icons/io5";
import { GiGearHammer } from "@react-icons/all-files/gi/GiGearHammer";
import { SiLinkedin } from "react-icons/si";

export const Nav = styled.nav`
  display: none;
  @media screen and (min-width: 360px) and (max-width: 896px) {
    background: #181818;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 60px;
    top: 120px;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition-property: opacity, right;
    transition: 0.4s ease-in-out;
  }
`;
export const NavMenuMobile = styled.ul`
  display: none;
  @media screen and (min-width: 360px) and (max-width: 896px) {
    background: #181818;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 60px;
    top: 120px;
  }
`;
export const ListItem = styled.li`
  display: none;
  @media screen and (min-width: 360px) and (max-width: 896px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    top: 120px;
  }
`;

export const HomeBtn = styled(IoHome)`
  font-size: 1.25em;
  color: #ffffff;
`;

export const AboutBtn = styled(FaUserAstronaut)`
  font-size: 1.25em;
  color: #ffffff;
`;
export const SkillsBtn = styled(GiGearHammer)`
  font-size: 1.25em;
  color: #ffffff;
`;
export const ProjectsBtn = styled(IoFolderOpenSharp)`
  font-size: 1.25em;
  color: #ffffff;
`;
export const LinkedIn = styled(SiLinkedin)`
  font-size: 1.25em;
  color: #ffffff;
`;
