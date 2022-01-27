import bgDeskop from '../image/bg-intro-desktop.svg';
import mobileimg from '../image/image-mockups.png';
const Showcase = () => {
  return (<div className='showcase' >
      <div style={{
    
    width:'55%',
    marginLeft:'50%',
    backgroundImage: `url(${bgDeskop})`,
    backgroundSize: '125%',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center-center',
    }}> 
    <img className ="showcaseimg"src={mobileimg} alt='shocaseimg'/>
      </div>
      
      <div className="show1">
      <h1>Next generation digital banking</h1>
      <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more. </p>
  <button className="btn">Request Invite</button>
       </div>
       
  </div>);
};

export default Showcase;
