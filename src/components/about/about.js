import './about.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myPic2 from './../../assets/pic1.jpg';
import linkedinLogo from './../../assets/linkedin-logo2.jpg';
import gmailLogo from './../../assets/gmail-logo.png';
import githubLogo from './../../assets/github-logo.png';
import scroller from "react-scroll";

export const About = () => {
    return (
        <div className="about" id="about">

            <div className="container">
                <div id="title">
                    <p id="about-me">ABOUT ME</p>
                    <hr className="line"></hr>
                </div>
                <Container className="table">
                    <Row className="about-row">
                        <Col xs={12} md={4} className="about-col">
                            <Row id="pic-horder">
                                <img id="myPic2" src={myPic2} alt="koorosh"></img>
                            </Row>
                            <Row id="social-row">

                                <a href="https://www.linkedin.com/in/koorosh-roozbehi-967b84140/">
                                    <img id="linkedinLogo" src={linkedinLogo} alt="linkkedinLogo"></img>
                                </a>
                                <a href="https://github.com/kooroshroozbehi">
                                    <img id="githubLogo" src={githubLogo} alt="githubLogo"></img>
                                </a>
                                <a href="mailto:kooroshroozbehi@gmail.com">
                                    <img id="gmailLogo" src={gmailLogo} alt="gmailLogo"></img>
                                </a>

                            </Row>
                        </Col>
                        <Col xs={12} md={4} className="about-col">
                            <Row className = "b">
                                <Row className="a">Hi there! I'm Koorosh, a software engineer based in Toronto.</Row>

                                <Row className="a"><br></br>I enjoy building websites, softwares, apps, games and anything to do with coding.</Row>
                            </Row>

                        </Col>
                        <Col xs={12} md={4} className="about-col">
                            <Row className = "b">
                                <Row className="a"><b>My personal interests:</b></Row>
                                <Row className="a"><br></br>
                                    Aside from coding, I enjoy playing Piano and Drums.
                                    <br></br>I have been playng Piano since I was 7 years old. I am currently on level 10 RCM
                                    and have been teaching Piano for about 5 years.
                                </Row>
                            </Row>
                        </Col>
                    </Row>

                </Container>




            </div>

        </div>

    );
}
export default About;
