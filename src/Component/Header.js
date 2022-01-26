
import logo from '../logo.svg';
const Header = () => { 
  return (<div className="header">
       <img className="mainLogo" src={logo} alt="logo" />
       <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contect</li>
           <li>Blog</li>
           <li>Careers</li>
       </ul>
       <button className="btn">Request Invite</button>
  </div>);
};

export default Header;
