import './about-section.scss';

import aboutBeans from './about-our-beans.jpg';
import aboutGoods from './about-goods.jpg';

import BeensDivider from '../divider/divider';

const AboutSection = ({header, descr}) => {
    const img = header === 'About goods' ? aboutGoods : aboutBeans;
    return (
        <section className='about'>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__img">
                        <img src={img} alt="women with cup of coffee" />
                    </div>
                    <div className="about__descr">
                        <h2>{header}</h2>
                        <BeensDivider color='black'/>
                        <p>{descr}</p>
                    </div>
                </div>
                <div className="about__line-divider"></div>   
            </div>
        </section>
    );
};

export default AboutSection;