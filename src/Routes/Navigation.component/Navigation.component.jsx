import React from 'react'
import {Link, Outlet} from "react-router-dom"
import "./Navigation.component.styles.scss"
import logo from "../../22.jpg"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
                <Link to={"/"} >
                    <img width={50}  height={50} src={logo} alt="logo"/>
                </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Outlet />
    </>
  )
}

export default Navigation