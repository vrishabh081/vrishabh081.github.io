export function Contact ()
{
    return(
        <>
            <div id="contact">
                <h1>Let's go in touch</h1>
                <div>
                <div id = "div-form">
                    <div>
                        <input type="text"  placeholder="Enter your name" />
                        <input type="email" placeholder="Enter email address" />
                        <textarea name="messege" id="text-area" placeholder="...."></textarea>
                    </div>
                    <div>
                        <button>Send Message <ion-icon name="send" ></ion-icon></button>
                    </div>
                </div>
                <div id="contact-ways">
                    <a href=""><ion-icon name="mail"></ion-icon></a>
                    <a href="https://www.linkedin.com/in/rishabh-vishwakarma-35028323a/"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href="https://github.com/vrishabh081"><ion-icon name="logo-github"></ion-icon></a>
                </div>
                </div>
            </div>
        </>
    );
}