import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import "../../css/footer.css"
export default function Footer() {
  return (
    <div>
      <>
        <div className='footer'>
            <div className="ournewsletter">
              <h1>Our Newsletter</h1>
              <p>Get in touch with us to raise a query regarding the service you need with a easy call. Every customer is served with great attention and priority time.</p>
              <div className="subscribeDiv">
               <form action="">
               <input type="text" placeholder='email' />
               <input type="submit" value="Subscribe" />
               </form>
              </div>
            </div>
            <div className='footerbody'>
              <div className="useFulllinks">
                <h1>Usefull Links</h1>
                <div className="links">
                  <a href="#" className="link"><FaGreaterThan/> home</a>
                  <a href="#" className="link"><FaGreaterThan/> About Us</a>
                  <a href="#" className="link"><FaGreaterThan/> Portfolio</a>
                  <a href="#" className="link"><FaGreaterThan/> Contact Us</a>
                  <a href="#" className="link"><FaGreaterThan/> Landing Page</a>
                  <a href="#" className="link"><FaGreaterThan/> Termes and conditions</a>
                  <a href="#" className="link"><FaGreaterThan/> Privacy policy</a>
                </div>
                
              </div>
              <div className="useFulllinks">
                <h1>Our services</h1>
                <div className="links">
                  <a href="#" className="link"><FaGreaterThan/> UI/UX Design</a>
                  <a href="#" className="link"><FaGreaterThan/> Mobile Development</a>
                  <a href="#" className="link"><FaGreaterThan/> Web development</a>
                  <a href="#" className="link"><FaGreaterThan/> Digital Marketing</a>
                  
                </div>
                
              </div>
              <div className="address1">
                <h1>Our services</h1>
                <div className="links">
                  <p>1-98/4/64,Jaya Vijaya Plaza,Vittal Rao Nagar,Mindspace,Madhapur, Hyderabad-500081.</p>
                  <p><span>Phone:</span> +91 8919088163, +91 6309423978</p>
                  <p><span>Email:</span>  info@analogueitsolutions.com</p>
                </div>
                
              </div>
              <div className="about1">
                <h1>About Analogue It Solutions</h1>
                <div className="links">
                  <p>Analogue IT solutions provide creative and dynamic Services of Web Development and Digital Marketing. We have gained rich expertise in building business-critical mobile and web products. We make complex art of Web development in a very simple, efficient and attractive manner.</p>
                </div>
                
              </div>
            </div>
          <div class="container">
            <div class="copyright">
              &copy; Copyright <strong><span>Analogue IT Solutions</span></strong>. All Rights Reserved
            </div>

          </div>
        </div>
      </>
    </div>
  )
}
