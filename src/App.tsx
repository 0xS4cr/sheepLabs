import React, { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Services from './components/Services';
import messagesFr from './locales/fr.json';
import messagesEn from './locales/en.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './sass/variables.scss';
import './sass/app.scss';

interface Messages {
  [key: string]: { [key: string]: string };
}

const handleSocialClick = (iconName: string) => {
  let url: string = '';
  switch (iconName) {
      case 'facebook':
          url = 'https://www.facebook.com/';
          break;
      case 'instagram':
          url = 'https://www.instagram.com/';
          break;
      case 'linkedin':
          url = 'https://www.linkedin.com/';
          break;
      case 'envelope':
          url = 'mailto:agence.sheep@gmail.com';
          break;
      default:
          break;
  }
  if (url) window.open(url, '_blank');
}

const messages: Messages = {
  fr: messagesFr,
  en: messagesEn
};

const App: React.FC = () => {
  const [locale, setLocale] = useState('fr');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const handleLanguageChange = (language: string) => {
    setLocale(language);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <NavBar onLanguageChange={handleLanguageChange} currentLanguage={locale} toggleTheme={toggleTheme} currentTheme={theme} />
      <section className='hero'>
      <Banner />
      <div className="icon-scroll"></div>
      </section>
      <section className='services' id='Services'>
        <Services />
      </section>
      <section className='about'id='About'>
      <h1><FormattedMessage id="navbar.about" defaultMessage="About" /></h1>    
      <div className='about-text-ctn'>
        <div className='about-text'>
          <FormattedMessage id="about.text1" defaultMessage="In 2023, in the verdant landscape of Haute-Saône, a new digital star was born: SHEEP. Founded by Clément, a passionate web developer with a wealth of front-end experience, SHEEP is the fruit of a bold vision. " />
        </div>
        <div className='about-text'>
          <FormattedMessage id="about.text2" defaultMessage="A partner dedicated to turning your digital visions into reality. Specializing in modern design and web development, we use cutting-edge technologies such as ViteJS, React and Redux to create dynamic, responsive and visually captivating websites." />
        </div>
      </div>
       <p><span className='bold'><FormattedMessage id="about.text3" defaultMessage="WHY SHEEP ?" /></span> <span><FormattedMessage id="about.text4" defaultMessage="Sheep are often seen in flocks, symbolizing collaboration and unity. This reflects our collaborative approach to project development, emphasizing teamwork and community. Sheep are also known for their intelligence and ability to adapt to their environment." /></span></p>
      </section>
      <section className='contact'id='Contact'>
      <h1><FormattedMessage id="navbar.contact" defaultMessage="Contact" /></h1>  
      <h2><FormattedMessage id="contact.text" defaultMessage="Contact" /></h2>
      <div className='social-links'> 
                    <button className='social-btn' onClick={() => handleSocialClick('facebook')}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>
                    <button className='social-btn' onClick={() => handleSocialClick('instagram')}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                    <button className='social-btn' onClick={() => handleSocialClick('linkedin')}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                    <button className='social-btn' onClick={() => handleSocialClick('envelope')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </div>
      </section>
      <section className='footer'>
        <p className='info'>© 2023 - Sheep Agency</p>
      </section>
    </IntlProvider>
  );
};

export default App;
