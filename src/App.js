import './App.css';
import Navbar from './repetitiveComponents/Navbar';
import HeroSection from './non-repetitiveComponents/HeroSection';
import NEWdropsHeading from './non-repetitiveComponents/NEWdropsHeading';


function App() {

  console.log("Width:", window.innerWidth);
console.log("Height:", window.innerHeight);

  return (
    <div className="Home_page mx-auto container">
      <Navbar/>
      <HeroSection/>
      <NEWdropsHeading/>
    </div>
  );
}

export default App;
