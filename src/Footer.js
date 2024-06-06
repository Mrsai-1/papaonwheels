import './Footer.css'
import Logo from "./PAPA LOGO.png"
import {NavLink} from "react-router-dom"
import insta from './images/Insta1.png'
import fb from './images/FB1.png'
import yt from './images/youtube_hover.png'
import li from './images/linked_in_hover.png'
import MakeInIndia from './images/Make_In_India.png'
import SwatchBharath from './images/SWATCH.png'





const FooterColumn = ({ title, children }) => {
    return (
      <div className="footer-column">
        <h3>{title}</h3>
        <ul>{children}</ul>
      </div>
    );
  }



  
  const Footer = () => {
    return (
      <footer className="footer" style={{borderTop:'2px solid black'}}>
        <div className="footer-container">
          <FooterColumn title={<img src={Logo} alt="papa" width="200px" height="100px"/>}>
            <li className="text-left" style={{fontWeight:'700'}}>2nd floor, 35/274, Plot No, 5-5,
35/264/2, Prashanti Nagar,
Shakti Puram, Kukatpally, 
Telangana 500072
</li>
            <li><a href="https://papaonwheels.com/tel:tel:+9181061%2089484"  rel="noopener noreferrer" className="tab-itam" target="_blank">+91 8106189484</a></li>
            <li><a href="mailto:papaofficial@gmail.com" className="tab-itam"  rel="noopener noreferrer" target="_blank">papaofficial24@gmail.com</a></li>
          </FooterColumn>
          <FooterColumn title="">
            <div className="tabs">
            <li><NavLink to="./" className="tab-itam1">Home</NavLink></li>
            <li><NavLink to="./About" className="tab-itam1">About Us</NavLink></li>
            <li><NavLink to="./Products" className="tab-itam1">introduction</NavLink></li>
            <li><NavLink to="./Contact " className="tab-itam1">Contact Us</NavLink></li>
            </div>
          </FooterColumn>
          
          <FooterColumn title="Connect With Us">
            <div className="icons">
                          <li className="icons"><a href="https://www.instagram.com/papaofficial_24/" rel="noopener noreferrer" target='_blank'><img src={insta} alt="" width="45px"  height="46px"/></a></li>
          <li className="icons"><a href="https://www.facebook.com/profile.php?id=61557768754407"  rel="noopener noreferrer" target='_blank'><img src={fb} alt=""  width="45px"  height="46px"/></a></li>
          <li className="icons"><a href="https://www.linkedin.com/in/papa-every-thing-for-every-tot-8b35a4301/"  rel="noopener noreferrer" target='_blank'><img src={yt} alt=""  width="45px"  height="46px"/></a></li>
          <li className="icons"><a href="https://www.linkedin.com/in/papa-every-thing-for-every-tot-8b35a4301/"  rel="noopener noreferrer" target='_blank'><img src={li} alt=""  width="45px"  height="46px"/></a></li>
          
          </div>
          <img src={MakeInIndia} alt="make" className='w-50 col-auto' style={{float:'inline-end'}}/>
          <img src={SwatchBharath} alt="sb" className='w-50 col-auto' style={{float:'inline-end'}}/>

          </FooterColumn>
        </div>
        
        <hr />
       
        <div className="copyright">
          <p>© 2024 Papa. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  

export default Footer