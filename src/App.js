import './App.css';
import Navbar from './repetitiveComponents/Navbar';
import HeroSection from './non-repetitiveComponents/HeroSection';
import NEWdropsHeading from './non-repetitiveComponents/NEWdropsHeading';


function App() {
  return (
    <div className="Home_page mx-auto container">
      <Navbar/>
      <HeroSection/>
      <NEWdropsHeading/>
    </div>
  );
}

export default App;
