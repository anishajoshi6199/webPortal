import cardImg1 from './Card/images/cardImg1.webp';
import cardImg2 from './Card/images/cardImg2.webp';
import cardImg3 from './Card/images/cardImg3.webp';
import cardImg4 from './Card/images/cardImg4.webp';
import cardImg5 from './Card/images/cardImg5.webp';
import cardImg6 from './Card/images/cardImg6.webp';
import cardImg7 from './Card/images/cardImg7.webp';
import cardImg8 from './Card/images/cardImg8.webp';
import cardImg9 from './Card/images/cardImg9.webp';
import cardImg10 from './Card/images/cardImg10.webp';
import btnArrow from './Card/images/btn-arrow.svg';
import './Card/style.css';

function Card() {
  return (
    <>
      <section className="cardMain">
        <h3 className="cardMainHeading">
          Latest reports from the Capgemini Research Institute
        </h3>
        <div className="rowOne">
          <div className="cardContent">
            <img className="cardImg" src={cardImg1} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">The people experience advantage</h4>
              <p className="cardPara">
                How companies can make life better for their most important
                assets
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={cardImg2} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Intelligent products and services</h4>
              <p className="cardPara">
                Progress in digital technologies and rapidly evolving customer
                demand have led to a new level of interconnectivity
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={cardImg3} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Data for net zero</h4>
              <p className="cardPara">
                The growing urgency around climate change has placed it at the
                forefront of global issues.
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={cardImg4} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Sustainable product design</h4>
              <p className="cardPara">
                Sustainability is a cornerstone of today’s manufacturing
                operations, but are organizations doing enough?
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={cardImg5} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Cloud sovereignty</h4>
              <p className="cardPara">
                The journey to cloud sovereignty – Assessing cloud potential to
                drive transformation and build trust
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={cardImg6} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Cybersecurity in smart factories</h4>
              <p className="cardPara">
                Smart factories are increasingly being utilized by industry as
                part of the transition toward digitization.
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={cardImg7} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Reflect, rethink, reconsider</h4>
              <p className="cardPara">
                Food loss or waste continues to be a major problem across the
                lifecycle of food.
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={cardImg8} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Digital twins</h4>
              <p className="cardPara">
                Digital twins, virtual replicas of physical systems that can
                model, simulate, monitor, analyze, and constantly optimize the
                physical world, will be at the core of this transformation.
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={cardImg9} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">Quantum technologies</h4>
              <p className="cardPara">
                How to prepare your organization for a quantum advantage now
              </p>
            </div>
          </div>
          <div className="cardContent">
            <img className="cardImg" src={cardImg10} alt="" />
            <div className="posCard">
              <h4 className="cardHeading">
                Unlocking the Value in Connected Health
              </h4>
              <p className="cardPara">
                Accelerated digital healthcare adoption amid the pandemic means
                now is the time for biopharma companies to transform their
                connected health portfolios
              </p>
            </div>
          </div>
        </div>
        <div className="heroCard-ButtonMain btnCardPos">
          <a href="#" className="heroCard-Button">
            See more reports <img src={btnArrow} className="ml-2" alt="" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Card;
