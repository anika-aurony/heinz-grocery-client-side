import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <Navbar bg="primary" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Heinz Grocery</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <br />

    
            
        </div >
    );
};

export default Header;