import React from 'react';
import icon1 from '../image/image-currency.jpg';
import icon2 from '../image/image-confetti.jpg';
import icon3 from '../image/image-plane.jpg';
import icon4 from '../image/image-restaurant.jpg';
const Blog = () => {
  return (<div className='Blog' >
      <div className='card'>
      <h1> Latest Articles</h1>      
      </div>
      <div className='aboutsection'>
            <div className='card'>
         <img className='card-img' src={icon1} alt='icon1'/> 
         <h1> By Claire Robinson</h1>
         <p> Receive money in any currency with no fees
            The world is getting smaller and we’re becoming more mobile. So why should you be 
            forced to only receive money in a single …
        </p>
            </div>
            <div className='card'>
         <img className='card-img' src={icon2} alt='icon2'/> 
         <h1>By Wilson Hutton</h1>
         <p> Treat yourself without worrying about money
            Our simple budgeting feature allows you to separate out your spending and set 
            realistic limits each month. That means you …
        </p>
            </div>
            <div className='card'>
         <img className='card-img' src={icon3} alt='icon3'/> 
         <h1>By Wilson Hutton</h1>
         <p> Take your Easybank card wherever you go
            We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
            while you’re abroad. We’ll even show you …
        </p>
            </div>
            <div className='card'>
         <img className='card-img' src={icon4} alt='icon4'/> 
         <h1> By Claire Robinson </h1>
         <p> Our invite-only Beta accounts are now live!
            After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
            It’s easy to request an invite through the site ...
        </p>
            </div>
      </div>
      

  </div>)
};

export default Blog;
