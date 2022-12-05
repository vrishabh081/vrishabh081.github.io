import "./Navbar.css";
import {Link} from "react-scroll";

const Navbar = ()=>
{
    const toggleMobileMenu = (event)=>
    {
        event.currentTarget.classList.toggle('open');
    }

    return(
        <>
            <div className="n-wrapper">
            {/* **********right side********** */}
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li><Link to="home" spy={true} smooth={true}>Home</Link></li>
                        <li><Link to="about-me" spy={true} smooth={true}>About me</Link></li>
                        <li><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
                        <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
                        <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                    </ul>
                </div>
                <a target={"blank"} href="https://drive.google.com/file/d/1xNRsBOBiUDKEodIGDfb1yw9utrY-OFbk/view?usp=share_link" download>
                <button className="n-button">
                    Resume<ion-icon name="download-outline"></ion-icon>  
                </button>
                </a>
            </div>

            {/* ********** Hamburger ********** */}
            <div id="hamburger-icon" onClick={toggleMobileMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className="mobile-menu" style={{listStyle:"none"}}>
                    <li><Link to="home" spy={true} smooth={true}>Home</Link></li>
                    <li><Link to="about-me" spy={true} smooth={true}>About me</Link></li>
                    <li><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
                    <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
                    <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                    <li>
                        <a target={"blank"} href="https://drive.google.com/file/d/1xNRsBOBiUDKEodIGDfb1yw9utrY-OFbk/view?usp=share_link" download>
                        Resume<ion-icon name="download-outline"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </>
    );
}

export default Navbar;