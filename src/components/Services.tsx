import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import '../sass/services.scss';


const Services: React.FC = () => {


  return (
    <div className="container">
      <h1><FormattedMessage id="navbar.service" defaultMessage="Services" /></h1>      
      <div className="cards-ctn">
          <div className="card design" >
            <div className="inside-card">
              <h2><FormattedMessage id="card.title1" defaultMessage="Design" /></h2>
              <div className="card-img">
              <img src="../assets/cardDesign.png" alt="sheep designer" /></div>
              <div className="card-txt">
                <ul>
                  <li className="arrowright"><FontAwesomeIcon className="iconright"  icon={faArrowRight} /><FormattedMessage id="card1.text1" defaultMessage="Design" /></li>
                  <li className="arrowleft"><FormattedMessage id="card1.text2" defaultMessage="Design" /><FontAwesomeIcon className="iconleft"  icon={faArrowLeft} /></li>
                  <li className="arrowright"><FontAwesomeIcon className="iconright"  icon={faArrowRight} /><FormattedMessage id="card1.text3" defaultMessage="Design" /></li>
                  <li className="arrowleft"><FormattedMessage id="card1.text4" defaultMessage="Design" /><FontAwesomeIcon className="iconleft" icon={faArrowLeft} /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card site" >
            <div className="inside-card">
              <h2><FormattedMessage id="card.title2" defaultMessage="Website" /></h2>
              <div className="card-img">
              <img src="../assets/cardWeb.png" alt="sheep developer" /></div>
              <div className="card-txt">
                <ul>
                  <li className="arrowright"><FontAwesomeIcon className="iconright" icon={faArrowRight} /><FormattedMessage id="card2.text1" defaultMessage="Design" /></li>
                  <li className="arrowleft"><FormattedMessage id="card2.text2" defaultMessage="Design" /><FontAwesomeIcon className="iconleft" icon={faArrowLeft} /></li>
                  <li className="arrowright"><FontAwesomeIcon className="iconright" icon={faArrowRight} /><FormattedMessage id="card2.text3" defaultMessage="Design" /></li>
                  <li className="arrowleft"><FormattedMessage id="card2.text4" defaultMessage="Design" /><FontAwesomeIcon className="iconleft" icon={faArrowLeft} /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card lab" >
            <div className="inside-card">
              <h2><FormattedMessage id="card.title3" defaultMessage="The LAB" /></h2>
              <div className="card-img">
              <img src="../assets/cardLab.png" alt="sheep student" /></div>
              <div className="card-txt">
               <p><FormattedMessage id="card3.text1" defaultMessage="Design" /></p>
               <div className="card-btn">
               <button><FormattedMessage id="card3.button1" defaultMessage="Design" /></button>
               <h3><FormattedMessage id="card3.text2" defaultMessage="COMING 2024" /></h3>
               </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Services;
