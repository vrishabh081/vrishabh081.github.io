import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Fashion from "../Images/Fashion.png";
import Espn from "../Images/Espn.png";
import mywardrobe from "../Images/mywardrobe.png";
import StepAdding from "../Images/StepAdding.png";
import Merchanto from "../Images/Merchanto.png";

let porjects = [
    {
        title : "My Wardrobe",
        description: "This website contains all products related to women fashion",
        techStack: "ReactJs, Redux, Chakra-UI, JavaScript, HTML and CSS",
    }
]
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
                        <h3 className="head-name">Merchanto</h3>
                        <p>This project is clone of Meesho E-commerce site. This site basically belong to all category as it contains all products related to men, women and kid.</p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : React.js, Javascript, Redux, Node.js, Express.js, MongoDB, Chakra UI, NPM Packages</p>
                        <div id="icons">
                            <a href="https://merchanto.netlify.app/"><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/saurabhsinghmehta/skillful-shirt-5398"><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div id="image-div">
                        <img src={Merchanto} alt="" />
                    </div>
                </div>
                <div id="projects-items" data-aos="fade-up">
                    <div>
                        <h3 className="head-name">Step Adding</h3>
                        <p>Hi, in this project, we are solving a real life problem. Here, we are calculating carry and printing sum step by step.</p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : React.js, Javascript, Node.js, Express.js</p>
                        <div id="icons">
                            <a href="https://frontend-taupe-six.vercel.app/"><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/vrishabh081/company_assignment_1"><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div id="image-div">
                        <img src={StepAdding} alt="" />
                    </div>
                </div>
                <div id="projects-items" data-aos="fade-up">
                    <div>
                        <h3 className="head-name">My Wardrobe</h3>
                        <p>This website contains all products related to women fashion </p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : React.js, Redux, Chakra-UI, JavaScript, HTML and CSS</p>
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
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : React.js, JavaScript, HTML and CSS</p>
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
            </div>
        </>
    )
}