import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Discover from './Components/Discover';
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
    </>
  );
}

export default App;
