import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/emoji">Emoji</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/strava">Strava</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;