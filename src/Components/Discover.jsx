import discoverImg1 from './Discover/images/discoverImg1.webp';
import discoverImg2 from './Discover/images/discoverImg2.webp';
import discoverImg3 from './Discover/images/discoverImg3.webp';
import './Discover/style.css';

function Discover() {
  return (
    <>
      <section className="discoverMain">
        <h3 className="discoverHeading">Discover more</h3>
        <div className="discover">
          <div className="discoverCard">
            <div className="discoverImg">
              <img src={discoverImg1} alt="" />
            </div>
            <div className="discoverCont">
              <h4>Research Library</h4>
              <p>Browse research and insights from across the business.</p>
            </div>
          </div>
          <div className="discoverCard">
            <div className="discoverImg">
              <img src={discoverImg2} alt="" />
            </div>
            <div className="discoverCont">
              <h4>Expert perspectives</h4>
              <p>Review the archive of blogs from Capgemini’s experts</p>
            </div>
          </div>
          <div className="discoverCard">
            <div className="discoverImg">
              <img src={discoverImg3} alt="" />
            </div>
            <div className="discoverCont">
              <h4>Analyst reports</h4>
              <p>Access our archive of analyst citations</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
