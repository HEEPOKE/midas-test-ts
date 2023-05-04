import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarCommon() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Question 1</Nav.Link>
          <Nav.Link href="/two">Question 2</Nav.Link>
          <Nav.Link href="/three">Question 3</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
