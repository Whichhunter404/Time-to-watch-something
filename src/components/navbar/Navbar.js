import React from 'react';
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const MyNavbar = ({is_Admin,logOffADMIN}) =>{
    if(is_Admin) {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Mágikus sorozatok</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Főoldal</Link></Nav.Link>
                        <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                        <Nav.Link><a onClick={logOffADMIN}>log off</a></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    else{
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Meleg sorozatok</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Főoldal</Link></Nav.Link>
                        <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};
export default MyNavbar;