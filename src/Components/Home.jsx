import Resume from "../Resume/Rishabh_Vishwakarma_Resume.pdf"

function Home()
{
    return(
        <>
            <div id="home">
            <div>
                <h1>Hello, my name is <br /> <span>Rishabh Vishwakarma</span> <br /> And I'm a <br /> <span>Full Stack Web Developer</span></h1>
                <img src="https://media-exp1.licdn.com/dms/image/D4D03AQHxgRDn_19_Tw/profile-displayphoto-shrink_800_800/0/1669238511709?e=1675296000&v=beta&t=qeq_DbL6vG597-_Ns2cR98wprOVxPD1DThzDEx3CeRE"  alt="mypic" />
            </div>
            <div id="resume-home" >
                <a href="https://drive.google.com/file/d/1xNRsBOBiUDKEodIGDfb1yw9utrY-OFbk/view?usp=share_link" target={"blank"} download>
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