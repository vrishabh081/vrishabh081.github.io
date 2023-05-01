import Resume from "../Resume/Rishabh_Vishwakarma_Resume.pdf"
import mypic from  "../Images/mypic.png"

function Home()
{
    return(
        <>
            <div id="home">
            <div>
                <h1>Hello, my name is <br /> <span>Rishabh Vishwakarma</span> <br /> And I'm a <br /> <span>Full Stack Web Developer</span></h1>
                <img src={mypic}  alt="mypic" />
            </div>
            <div id="resume-home" >
                <a href="https://drive.google.com/file/d/18qcCq-xsns99NmwgLFs-KZC1ucsiA8vO/view?usp=share_link" target={"blank"} download>
                    <button className="n-button" style={{textAlign:'center'}} >
                        Resume<ion-icon name="download-outline"></ion-icon>  
                    </button>
                </a>
            </div>
            </div>
        </>
    );
}

export default Home;