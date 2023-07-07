import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import {NavLink} from 'react-router-dom';
import data from '../data/data.json';
import { Link } from "react-router-dom"

const categorias = data.map(producto => producto.category)
const unique = new Set(categorias)


export const NavBar = () =>( 
      <Navbar bg="light" variant="light">
        <Container>
        <Link to={`/`}>
        <Navbar.Brand href="#home">TrenoTienda</Navbar.Brand>
        </Link>
          
          <Nav className="me-auto">
            {[...unique].map((item) => 
            <NavLink key={item} className="nav-link" to={`/category/${item}`}>
              {item}
              </NavLink>)}
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>

)