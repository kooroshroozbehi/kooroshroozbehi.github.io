import './contact.css';

function Contact() {

    return (
        <div className="contact">
            <div id="title">
                <p id="about-me">CONTACT</p>
                <hr className="line"></hr>
            </div>
            <div>
                <a href="mailto:kooroshroozbehi@gmail.com"><button className="social-button">Email</button></a>
                <a href="https://www.linkedin.com/in/koorosh-roozbehi-967b84140/"><button className="social-button">Linkedin</button></a>
                <a href="https://github.com/kooroshroozbehi"><button className="social-button">Github</button></a>
            </div>

        </div>
    )
}
export default Contact;