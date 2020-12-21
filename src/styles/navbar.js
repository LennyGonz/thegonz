export const Nav = styled.nav`
  background: #181818;
  width: 60px;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  min-height: 500px;

  @media screen and (max-width: 960px) {
    flex-direction: row;
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
    z-index: 3;
    min-height: 0;
  }
`;
export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #181818;
  position: fixed;
  z-index: 10;
  width: 60px;
  height: 100%;
  top: 0;
  @media screen and (max-width: 960px) {
    flex-direction: row;
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
    z-index: 3;
    min-height: 0;
  }
`;
export const LogoContainer = styled(Link)`
  background: #070707;
  width: 60px;
  height: 60px;
  padding-top: 2px;
  padding-left: 2px;
`;
export const Logo = styled.img`
  height: 55px;
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  font-size: 55px;
  list-style: none;
  height: 30%;
  width: 60px;
  z-index: 90;
  @media screen and (max-width: 960px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 30%;
    height: 60px;
  }
  @media screen and (min-width: 375px) and (max-width: 736px) {
    display: none;
  }
`;
export const NavItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  font-size: .75rem;
  cursor: pointer;
  z-index: 91;
  @media screen and (max-width: 960px) {
    height: 60px;
    width: 60px;
  }
`;
export const LinksMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 10%;
  width: 60px;
  @media screen and (max-width: 960px) {
    flex-direction: row;
    justify-content: flex-end;
    width: 15%;
    height: 60px;
  }
  @media screen and (min-width: 375px) and (max-width: 736px) {
    display: none;
  }
`;
export const GitHubIcon = styled(Github)`
  color: white;
  width: 35px;
  height: 35px;
  &:hover {
    color:  #2098d1;
  }
`;
export const LinkedinIcon = styled(Linkedin)`
  color: white;
  width: 35px;
  height: 35px;
  &:hover {
    color:  #2098d1;
  }
`;
export const NavItem = styled.li`
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 40px;
  width: 60px;
  list-style-type: none;
  cursor: pointer;
`;
export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
export const UnderlineBox = styled.div`
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: #2098d1;
    height: 4px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    left: 0;
    right: 0;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (min-width: 375px) and (max-width: 736px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 60px;
    width: 60px;
    cursor: pointer;
    background: red;
  }
`;
export const HamburgerIcon = styled(Hamburger)`
  display: none;
  @media screen and (min-width: 375px) and (max-width: 736px) {
    width: 55px;
    height: 55px;
  }
`;
