import './App.css';
import Navbar from './repetitiveComponents/Navbar';
import HeroSection from './non-repetitiveComponents/HeroSection';
import NEWdropsHeading from './non-repetitiveComponents/NEWdropsHeading';
import Categories from './non-repetitiveComponents/Categories'
import Reviews from './non-repetitiveComponents/Reviews';


function App() {


  return (
    <div className='Home_page'>
      <div className=" container mx-auto">

        <Navbar />


        <HeroSection />


        <NEWdropsHeading />



      </div>

      <div>

        <Categories />

      </div>

      <div className="container mx-auto">
       <Reviews/>
      </div>

    </div>



  );
}

export default App;
