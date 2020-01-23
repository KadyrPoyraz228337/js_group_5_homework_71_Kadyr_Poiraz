import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "reactstrap";
import {Link} from "react-router-dom";
import NavItm from "./navItm/navItm";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand tag={Link} to='/' >Pizza (Admin)</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItm to='/' >Dishes</NavItm>
                    <NavItm to='/orders' >Orders</NavItm>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;