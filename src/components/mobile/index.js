import React from 'react';
import { Nav, NavMenuMobile, ListItem, HomeBtn, AboutBtn, SkillsBtn, ProjectsBtn, LinkedIn } from './mobileNavBarElements';

const MobileNav = () => {
  return (
    <>
      <Nav>
        <NavMenuMobile>
          <ListItem>
            <HomeBtn />
          </ListItem>
          <ListItem>
            <AboutBtn />
          </ListItem>
          <ListItem>
            <SkillsBtn />
          </ListItem>
          <ListItem>
            <ProjectsBtn />
          </ListItem>
          <ListItem>
            <LinkedIn />
          </ListItem>
        </NavMenuMobile>
      </Nav>
    </>
  )
}

export default MobileNav;
