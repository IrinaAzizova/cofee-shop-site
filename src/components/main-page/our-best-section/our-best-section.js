import './our-best-section.scss';

import solimo from './Solimo.jpg';
import presto from './presto.jpg';
import aromatico from './aromatico.jpg';

const OurBest = () => {

    const coffeeData = [
        {name: 'Solimo Coffee Beans 2 kg', price: 10.73, img: solimo},
        {name: 'Presto Coffee Beans 1 kg', price: 15.99, img: presto},
        {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: aromatico}
    ];

    const CoffeeItems = coffeeData.map(item => {
        return (
            <div className="coffee-item">
                <img src={item.img} alt={item.name} />
                <p className='coffee-item__header'>{item.name}</p>
                <p className='coffee-item__price'>{item.price + '$'}</p>
            </div>
        );
    })

    return (
        <section className='our-best'>
            <div className="container">
                <h2>Our Best</h2>
                <div className="our-best-wrapper">
                    {CoffeeItems}
                </div>
            </div>            
        </section>
    );
};

export default OurBest;