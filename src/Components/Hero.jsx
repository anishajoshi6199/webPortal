import heroBack from './Hero/images/heroBack.webp';
import heroBack2 from './Hero/images/heroBack2.webp';
import heroBack3 from './Hero/images/heroBack3.webp';
import btnArrow from './Hero/images/btn-arrow.svg';
import './Hero/style.css';

function Hero() {
  return (
    <>
      <div className="mainPageHeading">
        <h2>
          Explore our latest thought leadership, ideas, and insights on the
          issues that are shaping the future of business and society.
        </h2>
      </div>
      <div className="heroMain">
        <div className="hero">
          <img src={heroBack} className="heroImg" alt="" />
          <img src={heroBack2} className="heroImg2" alt="" />
          <img src={heroBack3} className="heroImg3" alt="" />
          <div className="heroCard">
            <div className="heroCard-Content">
              <h4>Leading sustainability</h4>
              <p className="heroCard-Content-Para">
                In the race to save the planet, we bring insights on how to go
                beyond corporate responsibility to make sustainability a source
                of value.
              </p>
            </div>
            <div className="heroCard-ButtonMain">
              <a href="#" className="heroCard-Button">
                Read More <img src={btnArrow} className="ml-2" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
