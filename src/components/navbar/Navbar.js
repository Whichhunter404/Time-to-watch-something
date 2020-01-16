import React from 'react';
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const MyNavbar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
export default MyNavbar;