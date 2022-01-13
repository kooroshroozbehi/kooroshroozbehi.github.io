import './carousel.css';
import pic from './../../assets/pic12.jpeg';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import myPic from './../../assets/pic1.jpg';

export const Carousel = () => {
    return (
        <div className="carousel">
            <Parallax bgImage={pic}>
                <div className="containerDiv">
                    <div className="container">
                        <img id="myPic" src={myPic} alt="koorosh"></img>
                        <div id = "titleDiv">
                        <h1 id="titleh1">
                            Koorosh Roozbehi
                            <h2 id="titleh2">
                                Software Engineer
                            </h2>
                        </h1>
                        
                        </div>
                        
                        
                        
                    </div>


                </div>

            </Parallax>


        </div>

    );
}

export default Carousel;
