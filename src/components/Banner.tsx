import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../sass/banner.scss';
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profil from '../assets/profil.png';

export default function Banner() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const socialLinksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(titleRef.current.children, 
                { autoAlpha: 0, y: "-=40" }, 
                {
                    duration: 0.1,
                    y: "0",
                    autoAlpha: 1,
                    stagger: 0.1,
                    ease: "Power3.easeOut"
                }
            );
        }

        // Démarrage de l'animation des boutons sociaux après un délai
        if (socialLinksRef.current) {
            gsap.fromTo(socialLinksRef.current.children, 
                { autoAlpha: 0, y: "-=40" },
                {
                    delay: 0.8, // Délai avant le démarrage de l'animation
                    duration: 0.1,
                    y: "0",
                    autoAlpha: 1,
                    stagger: 0.1,
                    ease: "Power3.easeOut"
                }
            );
        }
    }, []);

    const handleSocialClick = (iconName: string) => {
        let url: string = '';
        switch (iconName) {
            case 'facebook':
                url = 'https://www.facebook.com/people/SHEEP-LABS/61553833833263/';
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

    return (
        <div className='banner'>
            <div className='text-ctn'>
                <h1 className='title' ref={titleRef}>
                    <span>S</span>
                    <span>h</span>
                    <span>e</span>
                    <span>e</span>
                    <span>p</span>
                </h1>
                <h2 className='subtitle'><FormattedMessage id="banner.subtitle" defaultMessage="Digital Agency" /><br />& LABS</h2>
                <div className='social-links' ref={socialLinksRef}>
                    <button className='social-btn' aria-label="Facebook" onClick={() => handleSocialClick('facebook')}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>
                    <button className='social-btn' aria-label="Instagram" onClick={() => handleSocialClick('instagram')}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                    <button className='social-btn' aria-label="Linkedin" onClick={() => handleSocialClick('linkedin')}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                    <button className='social-btn' aria-label="mail" onClick={() => handleSocialClick('envelope')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </div>
            </div>
            <div className='image-ctn'>
               <img src={profil} alt="" />
            </div>
        </div>
    );
}
