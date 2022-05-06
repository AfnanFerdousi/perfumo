import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import auth from '../../firebase.init';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">
                        <img style={{width: "55%"}} className='' alt='logo' src={logo} />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/inventory">
                            <Nav.Link >Inventory</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/blogs">
                            <Nav.Link >Blogs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/awards">
                            <Nav.Link >Awards</Nav.Link>
                        </LinkContainer>
                        {
                            user && <>
                                <LinkContainer to="/myitem">
                                    <Nav.Link >My Items</Nav.Link>
                                </LinkContainer>
                            </>
                        }
                        {
                            user ?
                                <button className="btn fw-bold text-danger" onClick={logout}>LogOut</button> : <Link className="btn fw-bold text-success" to="/login">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;