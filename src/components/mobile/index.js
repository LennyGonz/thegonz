import React from 'react';
import { Nav, NavMenuMobile, ListItem, LinkItem, HomeBtn, AboutBtn, SkillsBtn, ProjectsBtn, LinkedIn } from './mobileNavBarElements';

const MobileNav = ({ open }) => {
  return (
    <div>
      <Nav open={open}>
        <NavMenuMobile>
          <ListItem to="/" activeClassName="active">
            <HomeBtn />
          </ListItem>
          <ListItem to="/about" activeClassName="active">
            <AboutBtn />
          </ListItem>
          <ListItem to="/skills" activeClassName="active">
            <SkillsBtn />
          </ListItem>
          <ListItem to="/projects" activeClassName="active">
            <ProjectsBtn />
          </ListItem>
          <LinkItem>
            <a href="https://www.linkedin.com/in/lenny-gonzalez">
              <LinkedIn />    
            </a>
          </LinkItem>
        </NavMenuMobile>
      </Nav>
    </div>
  )
}

export default MobileNav;
