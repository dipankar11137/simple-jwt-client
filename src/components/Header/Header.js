import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <Navbar bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand as={Link} to='/' href="#home">Home</Navbar.Brand> */}
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link as={Link} to='/orders' >Order</Nav.Link>
                        <Nav.Link as={Link} to='/about' >About</Nav.Link>
                        <Nav.Link as={Link} to='/login' >Login</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;