import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';

const menu = [
    {text: "Home", link: "#home"},
    {text: "Products", link:"#products"},
    {text: "Pricing", link:"#pricing"}
]

export const NavBar = () =>( 
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">GameShop</Navbar.Brand>
          <Nav className="me-auto">
            {menu.map((item) => <Nav.Link href={item.link}>{item.text}</Nav.Link>)}
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>

)