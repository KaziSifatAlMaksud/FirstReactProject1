import React from 'react';
import fbicon from '../image/icon-facebook.svg';
import isicon from '../image/icon-instagram.svg';
import youicon from '../image/icon-pinterest.svg';
import pticon from '../image/icon-youtube.svg';
import twicon from '../image/icon-twitter.svg';
import logo from '../logo.svg';
const Footer = () => {
  return (<div className="footer">
      <div className="foot1">
          <img src={logo} alt='algo'/>
          
              <ul>
                  <li><img src={fbicon} alt='algo'/></li>
                  <li><img src={isicon} alt='algo'/></li>
                  <li><img src={youicon} alt='algo'/></li>
                  <li><img src={pticon} alt='algo'/></li>
                  <li><img src={twicon} alt='algo'/></li>
              </ul>
    
      </div>
      <div foot2>
          <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li> Blog</li>
          </ul>
          <ul>
              <li>careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
          </ul>
      </div>
      <div>
      <button className="btn">Request Invite</button>
      <h4>Copyright &#169; 2022   <i>Kazi Sifat Al Maksud</i>      All Right Reswved</h4>
      </div>

  </div>);
};

export default Footer;
