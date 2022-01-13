import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import javaLogo from './../../assets/java-icon.jpg';
import javaScriptLogo from './../../assets/javascript-logo.png';
import cLogo from './../../assets/c-logo.png';
import gitLogo from './../../assets/git-logo.jpg';
import junitLogo from './../../assets/junit-logo.jpg';
import xmlLogo from './../../assets/xml-logo.png';
import htmlLogo from './../../assets/html-logo.png';
import cssLogo from './../../assets/css-logo.png';
import reactLogo from './../../assets/react-logo.jpg';
import bootstrapLogo from './../../assets/bootstrap-logo.jpg';
import nodejsLogo from './../../assets/nodejs-logo.png';
import './skills.css';

function Skills() {

    return (
        <div className="skills">
            <div className="container">
                <div id="title">
                    <p id="skills">SKILLS</p>
                    <hr className="line"></hr>
                </div>

                <Container className="container-div">
                    <Row className="table-container">
                        <Col xs={12} md={6} className="skills-col">
                            <Row className="skills-row">
                                <Col className="skills-col-col">
                                    <Row className="skills-header-row">
                                        <b>Programming Languages</b>
                                        <hr className="title-line"></hr>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}><img className="logo" id="java-logo" src={javaLogo} alt="javaLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            Java
                                        </Col>

                                    </Row>
                                    <Row className="skills-row-row">

                                        <Col xs={4} md={4}>
                                            <img className="logo" src={javaScriptLogo} alt="javaScriptLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            JavaScript
                                        </Col>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={cLogo} alt="cLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            C
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="skills-col-col">
                                    <Row className="skills-header-row">
                                        <b>Version Control</b>
                                        <hr className="title-line"></hr>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={gitLogo} alt="gitLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            Git
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="skills-col-col">
                                    <Row className="skills-header-row">
                                        <b>Testing Framework</b>
                                        <hr className="title-line"></hr>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={junitLogo} alt="junitLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            Junit
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={12} md={6} className="skills-col">
                            <Row>
                                <Col className="skills-col-col">
                                    <Row className="skills-header-row">
                                        <b>Frontend</b>
                                        <hr className="title-line"></hr>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={xmlLogo} alt="xmlLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            XML
                                        </Col>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={htmlLogo} alt="htmlLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            HTML
                                        </Col>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={cssLogo} alt="cssLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            CSS
                                        </Col>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={javaScriptLogo} alt="javaScriptLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            JavaScript
                                        </Col>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={reactLogo} alt="reactLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            React.js
                                        </Col>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={bootstrapLogo} alt="bootstrapLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            Bootstrap
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            <Row>
                                <Col className="skills-col-col">
                                    <Row className="skills-header-row">
                                        <b>Backend</b>
                                        <hr className="title-line"></hr>
                                    </Row>
                                    <Row className="skills-row-row">
                                        <Col xs={4} md={4}>
                                            <img className="logo" src={nodejsLogo} alt="nodejsLogo"></img>
                                        </Col>
                                        <Col xs={2} md={2} className="language-col">
                                            Node.js
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}
export default Skills;