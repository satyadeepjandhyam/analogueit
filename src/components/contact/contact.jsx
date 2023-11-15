import { CiLocationOn, } from "react-icons/ci";
import { PiLinkedinLogoLight,PiFacebookLogoLight,PiInstagramLogoLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../../css/contact.css"
function Contact() {
    return (
        <>
        <div className="contact">
            <div className="contactLeft">
                <h1>Contact Us</h1>
                    <div className="cdiv"><CiLocationOn className="cicon2" /><p>1-98/4/64,
                        Jaya Vijaya Plaza,
                        Vittal Rao Nagar,
                        Mindspace,
                        Madhapur, Hyderabad-500081.</p>
                    </div>
                <div className="cdiv"><TfiEmail className="cicon1"/><p> info@analogueitsolutions.com</p></div>
                <div className="cdiv"><BsFillTelephoneFill className="cicon1"/><p>+91 8919088163, +91 6309423978</p></div>
                <div className="socialIcons">
                    <a href="#"><PiLinkedinLogoLight className="cicon1"/></a>
                    <a href="#"><PiInstagramLogoLight className="cicon1"/></a>
                    <a href="#"><PiFacebookLogoLight className="cicon1"/></a>
                </div>
            </div>
            <div className="contactright">
                <div className="formDiv">
                <h1>Get in touch</h1>
                <p>feel free to droup us a line below!</p>
                <form action="" className="form">
                   
                        <input type="text" className="input" placeholder="username" />
                        <input type="text" className="input"  placeholder="Mobile Number" />
                        <input type="email" className="input" placeholder="Email" />
                        <input type="text" className="input" placeholder="subject" />
                        <input type="text" className="input2" placeholder="message" />
                        <input type="submit" className="submitbtn" value="submit" />
                
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
