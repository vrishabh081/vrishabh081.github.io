import "./Navbar.css";
const Navbar = ()=>
{
    const toggleMobileMenu = (event)=>
    {
        event.currentTarget.classList.toggle('open');
    }


    return(
        <>
            <div className="n-wrapper">
            {/* **********left side********** */}
            <div className="n-left">
                <div className="n-name">
                    Rishabh V
                </div>
            </div>
            
            {/* **********right side********** */}
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>About me</li>
                        <li>Skills</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button className="n-button">
                    Resume
                </button>
            </div>

            {/* ********** Hamburger ********** */}
            <div id="hamburger-icon" onClick={toggleMobileMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className="mobile-menu" style={{listStyle:"none"}}>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>Contact</li>
                        <li>
                        <button className="n-button">
                        Resume
                        </button>
                    </li>
                </ul>
            </div>
            </div>

            {/* Home */}
            <div id="home">
                <h1>Hello, my name is Rishabh Vishwakarma And I'm a Full Stack <span style={{color:"black"}}>Web Developer</span></h1>
                <img src="https://images.squarespace-cdn.com/content/v1/6102fcfd9ac5253cfa746728/1631062296763-KV4E7DQRI9YKDKXD8IAO/DSC04623-Edit.jpg?format=300w"  alt="" />
            </div>
        </>
    );
}

export default Navbar;