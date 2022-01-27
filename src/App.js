import Header from './Component/Header';
import About from './Component/About';
import './App.css';
import Blog from './Component/Blog';
import Showcase from './Component/Showcase';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
     <Header/> 
     <Showcase/>
     <About />
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
