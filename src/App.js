import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Discover from './Components/Discover';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="mainPageHeading">
        <h2>
          Explore our latest thought leadership, ideas, and insights on the
          issues that are shaping the future of business and society.
        </h2>
      </div>
      <Hero />
      <Card />
      <Hero />
      <Discover />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
