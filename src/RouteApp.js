import React from "react";
import {Outlet, Link, NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {useParams} from "react-router-dom";

export function RouteApp(){
    return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Маршрутизация</Navbar.Brand>
                    <Navbar.Toogle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/users">Пользователи</Nav.Link>
                            <Nav.Link href="/posts">Статьи</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>    
            </Navbar>
            
            
            
    );    
}

export default RouteApp;