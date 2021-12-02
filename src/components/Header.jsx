import React from "react";
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";

class Header extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Jocke App
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Header