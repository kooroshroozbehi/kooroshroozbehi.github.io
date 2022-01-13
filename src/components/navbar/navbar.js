import React, { Component} from 'react';
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {scroller} from "react-scroll";

class Topbar extends Component {
    state = {
        bg: 'transparent'
        
    };

    listenScrollEvent = e => {
        if (window.scrollY > 60) {
            this.setState({ bg: "dark" });
        } else {
            this.setState({ bg: "transparent" });
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }



    render() {
        return(
            <Navbar bg = { this.state.bg } fixed = "top" expand = "md" className = "animate-navbar nav-theme justify-content-between" id = "navbar-container">
                    <div id="abc">
                        <Navbar.Toggle id = "nav-toggle" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto ">
                            <Nav.Link className="navbar-link" href="#home"
                                    onSelect={() => scroller.scrollTo('carousel', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>Home</Nav.Link>
                                <Nav.Link className="navbar-link" href="#about"
                                    onSelect={() => scroller.scrollTo('about', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>About</Nav.Link>
                                <Nav.Link className="navbar-link" href="#skills"
                                    onSelect={() => scroller.scrollTo('skills', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>Skills</Nav.Link>
        
                                <Nav.Link className="navbar-link" href="#projects"
                                    onSelect={() => scroller.scrollTo('projects', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>Projects</Nav.Link>
                                <Nav.Link className="navbar-link" href="#contact"
                                    onSelect={() => scroller.scrollTo('contact', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
            </Navbar>
                
        
            );
    }
}
export default Topbar;