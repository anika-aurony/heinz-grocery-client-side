import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
      }
    return (
        <div>

            <Navbar bg="primary" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Heinz Grocery</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {
                            user ? 
                            <div className='d-flex'>
                                <Nav.Link as={Link} to="/manageInventories">Manage Inventories</Nav.Link>
                                <Nav.Link as={Link} to="/addItem">Add Items</Nav.Link>
                                <Nav.Link as={Link} to="/myItem">My Items</Nav.Link>
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}> Sign Out</button>
                            </div>
                            
                            
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        
                    </Nav>
                </Container>
            </Navbar>

            <br />

    
            
        </div >
    );
};

export default Header;