import './projects.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import calcApp from './../../assets/calculator-app.png';
import pongGame from './../../assets/pong-game.png';
import { useState } from 'react'

function Projects() {



    return (
        <div className="projects">
            <div className="containerDiv">
                <div id="title">
                    <p id="my-projects">PROJECTS</p>
                    <hr className="line"></hr>
                </div>
                <div id="container">
                    <Row className="project-row">
                        <Col xs={12} md={6} className="project-item">

                            <Row xs={12} md={6} className="project-title">
                                Pong Game
                            </Row>
                            <Row xs={12} md={6} className="project-thumbnail">
                                <Col xs={10} md={10} className="project-col">
                                    <Row className="image-row">
                                        <img id="pong-image" src={pongGame} alt="pongGame"></img>
                                    </Row>

                                    <Row className="button-row">
                                        <a href="https://github.com/kooroshroozbehi/PongGame-Java">
                                            <button className="project-button">source code</button>
                                        </a>

                                    </Row>
                                </Col>

                            </Row>
                        </Col>
                        <Col xs={12} md={6} className="project-item">

                            <Row xs={12} md={6} className="project-title" >
                                Calculator App
                            </Row>
                            <Row xs={12} md={6} className="project-thumbnail" >
                                <Col xs={10} md={10} className="project-col">
                                    <Row className="image-row">
                                        <img id="calc-image" src={calcApp} alt="calcApp"></img>
                                    </Row>

                                    <Row className="button-row">
                                        <a href="https://github.com/kooroshroozbehi/CalculatorApp">
                                            <button className="project-button">source code</button>
                                        </a>
                                    </Row>
                                </Col>

                            </Row>


                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    )
}
export default Projects;

