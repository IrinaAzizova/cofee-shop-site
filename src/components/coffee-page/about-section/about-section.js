import './about-section.scss';

import aboutBeans from './img/about-our-beans.jpg';

import BeensDivider from '../../divider/divider';

const AboutSection = () => {
    return (
        <section className='about'>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__img">
                        <img src={aboutBeans} alt="women with cup of coffee" />
                    </div>
                    <div className="about__descr">
                        <h2>About our beans</h2>
                        <BeensDivider color='black'/>
                        <p>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        </p>
                        <p>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. 
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>
                </div>
                <div className="about__line-divider"></div>   
            </div>
        </section>
    );
};

export default AboutSection;