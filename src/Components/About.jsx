import "./Navbar/Navbar.css"

export function About()
{
    return(
        <>
            <div id="about-me">
                <h1>About me</h1>
                <div>
                    <img src="https://media1.giphy.com/media/OWgDiFQbtizpdLewE5/giphy.gif?cid=ecf05e47hackoc61l69fgghynwt80jm5ufzeokfmms6zvvlv&rid=giphy.gif&ct=g" alt="" />
                    <p className="description" style={{fontSize:"17px"}}>A qualified and passionate <span>Full Stack Web Developer</span> <br /> proficient in - <span> MERN</span> stack.<br/> <br/> Developing websites and web apps using - <span><br/>Javascript</span>, <span>React</span>, <span>Node.js</span>, <span>Express.js</span> and <span>MongoDB</span>.<br/> <br/> Completed <span>1000hrs+</span> coding and looking forward to opportunities that can bring challenges.</p>
                </div>
            </div>
        </>
    );
}
