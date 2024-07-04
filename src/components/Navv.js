import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function Navv({settext,setrate}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid >
        <Navbar.Brand href="#">MovieMingle</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link href="#action2"><Link style={{textDecoration:"none", color:"white"}} to="/">Movies</Link></Nav.Link>
            <Nav.Link href="#action2"><Link style={{textDecoration:"none", color:"white"}} to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#action2"><Link style={{textDecoration:"none", color:"white"}} to="/about">About</Link></Nav.Link>
           
          </Nav>
          <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        onChange={(newRating)=>setrate(newRating)}
    />,
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>settext(e.target.value)}
            />
            <Button variant="outline-success" style={{backgroundColor:"#DC5F00",color:"white",borderColor:"#DC5F00"}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;