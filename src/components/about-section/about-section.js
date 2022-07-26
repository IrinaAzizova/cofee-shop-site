import './about-section.scss';



import BeensDivider from '../divider/divider';

const AboutSection = ({header, descr, country, price, img}) => {
    let pCountry,
        pPrice;
    if (country.length > 0 && price > 0) {
        pCountry = <p className='about__country'><b>Country:</b> {country}</p>;
        pPrice = <p className='about__price'><b>Price:</b> {price}$</p>;
    }
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
                        {pCountry}
                        {pPrice}
                    </div>
                </div>
                <div className="about__line-divider"></div>   
            </div>
        </section>
    );
};

export default AboutSection;