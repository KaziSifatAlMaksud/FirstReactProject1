import React from 'react';
import icon1 from '../image/icon-api.svg';
import icon2 from '../image/icon-budgeting.svg';
import icon3 from '../image/icon-onboarding.svg';
import icon4 from '../image/icon-online.svg';
const About = () => {
  return (<div className='about' >
      <div className='about1'>
      <h1>Why choose Easybank?</h1>
      <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
        your finances like never before.</p>
      </div>
      <div className='aboutsection'>
            <div className='card'>
         <img className='card-img' src={icon1} alt='icon1'/> 
         <h1>Online Banking</h1>
         <p> Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.
        </p>
            </div>
            <div className='card'>
         <img className='card-img' src={icon2} alt='icon2'/> 
         <h1>Simple Budgeting</h1>
         <p> See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.
        </p>
            </div>
            <div className='card'>
         <img className='card-img' src={icon3} alt='icon3'/> 
         <h1>Fast Onboarding</h1>
         <p> We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.
        </p>
            </div>
            <div className='card'>
         <img className='card-img' src={icon4} alt='icon4'/> 
         <h1> Open API</h1>
         <p> Manage your savings, investments, pension, and much more from one account. Tracking 
         your money has never been easier.
        </p>
            </div>
      </div>
      

  </div>)
};

export default About;
