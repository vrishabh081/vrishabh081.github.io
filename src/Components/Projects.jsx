import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Fashion from "../Images/Fashion.png";
import Espn from "../Images/Espn.png";
import mywardrobe from "../Images/mywardrobe.png";
import PluralSight from "../Images/PluralSight.png";

export function Projects()
{
    useEffect(()=>
    {
        Aos.init({duration: 1000})

    }, [])
    return(
        <>
            <div id="projects">
                <h1>My Projects</h1>
                <div id="projects-items" data-aos="fade-up">
                    <div>
                        <h3 className="head-name">My Wardrobe</h3>
                        <p>This website contains all products related to women fashion </p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : ReactJs, Redux, Chakra-UI, JavaScript, HTML and CSS</p>
                        <div id="icons">
                            <a href="https://clever-nougat-a72f71.netlify.app/"><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/mohitd427/erratic-dolls-5259"><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div id="image-div">
                        <img src={mywardrobe} alt="" />
                    </div>
                </div>

                <div id="projects-items" data-aos="fade-up">
                    <div>
                        <h3 className="head-name">Fashion Collection</h3>
                        <p>A fashion collection website where you can find and purchase clothing items</p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : ReactJs, JavaScript, HTML and CSS</p>
                        <div id="icons">
                            <a href="https://fashion-collection.vercel.app/"><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/vrishabh081/important-fog-2987"><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div id="image-div">
                        <img src={Fashion} alt="" />
                    </div>
                </div>
                <div id="projects-items" data-aos="fade-up">
                    <div>
                        <h3 className="head-name">ESPN cricinfo</h3>
                        <p>A cricket news website that also contains a fantasy page and scoring page.</p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : JavaScript, Json-server, HTML and CSS</p>
                        <div id="icons">
                            <a href="https://fashion-collection.vercel.app/"><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/vrishabh081/important-fog-2987"><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div id="image-div">
                        <img src={Espn} alt="" />
                    </div>
                </div>
                <div id="projects-items" data-aos="fade-up">
                    <div>
                        <h3 className="head-name">Plural Sight</h3>
                        <p>An Education website where a lot of courses are available like web designing, digital market and many more.</p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : JavaScript, HTML and CSS</p>
                        <div id="icons">
                            <a href="https://fashion-collection.vercel.app/"><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/vrishabh081/important-fog-2987"><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div id="image-div">
                        <img src={PluralSight} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}