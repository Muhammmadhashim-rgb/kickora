import './App.css';
import Navbar from './repetitiveComponents/Navbar';
import HeroSection from './non-repetitiveComponents/HeroSection';


function App() {
  return (
    <div className="Home_page mx-auto container">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}

export default App;
