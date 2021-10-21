import React, { Component } from 'react'
import {Button, Navbar, Container, Nav, NavLink} from 'react-bootstrap';
export class Navv extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container fluid>
                <Navbar.Brand href="#home">NeoSOFT Technologies</Navbar.Brand>
                <Nav className="ms-auto">
                        <NavLink href="/home">HOME</NavLink>
                        <NavLink href="/registration">REGISTRATION</NavLink>
                        <NavLink href="/">LOGIN</NavLink>
                        <NavLink href="#contact">CONTACT US</NavLink>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Navv
