
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

  const title = 'LR/00/T';
  function handleClick() {
    console.log("I was clicked");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#resume" onClick={handleClick}>Resume</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
            <NavDropdown title="Ideas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">TicTacToe: Expert Edition</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Search This
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Work or Workout</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Whats That? 
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

  );
}

export default Header;
