import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Fashion from "../Images/Fashion.png";
import mywardrobe from "../Images/mywardrobe.png";
import StepAdding from "../Images/StepAdding.png";
import KanpurAcademy from "../Images/kanpurClass.png";
import BestFood from "../Images/best-food.png";


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
                        <h3 className="head-name">Good Food</h3>
                        <p>It is an E-commerce web application related to food. Users can order food and the admin can manage all items and manage orders.</p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : React.js, Redux, Node.js, Express.js, MongoDB, Material Ui and NPM Packages</p>
                        <div id="icons">
                            <a href="https://best-good-food.vercel.app/" target={"_blank"}><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/vrishabh081/Good-Food" target={"_blank"}><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div id="image-div">
                        <img src={BestFood} alt="" />
                    </div>
                </div>
                <div id="projects-items" data-aos="fade-up">
                    <div>
                        <h3 className="head-name">Kanpur Academy</h3>
                        <p>Here, we are solving a real-life problem which exists in school. Like - We can take a student's admission and print a pdf.</p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : React.js, Javascript, Redux, Node.js, Express.js, MongoDB, NPM Packages</p>
                        <div id="icons">
                            <a href="https://best-kanpur-academy.vercel.app/" target={"_blank"}><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/vrishabh081/Kanpur-Academy" target={"_blank"}><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div id="image-div">
                        <img src={KanpurAcademy} alt="" />
                    </div>
                </div>
                <div id="projects-items" data-aos="fade-up">
                    <div>
                        <h3 className="head-name">Step Adding</h3>
                        <p>Hi, in this project, we are solving a real life problem. Here, we are calculating carry and printing sum step by step.</p>
                        <p style={{marginTop:"15px", fontSize:"17px"}}> <span className="tech-stack">Tech Stack</span> : React.js, Javascript, Node.js, Express.js</p>
                        <div id="icons">
                            <a href="https://step-adding.vercel.app/" target={"_blank"}><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/vrishabh081/Step-Adding" target={"_blank"}><ion-icon name="logo-github"></ion-icon></a>
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
                            <a href="https://clever-nougat-a72f71.netlify.app/" target={"_blank"}><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/mohitd427/erratic-dolls-5259" target={"_blank"}><ion-icon name="logo-github"></ion-icon></a>
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
                            <a href="https://fashion-collection.vercel.app/" target={"_blank"}><ion-icon name="eye"></ion-icon></a>
                            <a href="https://github.com/vrishabh081/important-fog-2987" target={"_blank"}><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div id="image-div">
                        <img src={Fashion} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}