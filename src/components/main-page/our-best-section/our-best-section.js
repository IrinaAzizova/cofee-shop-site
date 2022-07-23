import './our-best-section.scss';

import CoffeeList from '../../coffee-list/coffee-list';

const CofeeBest = () => {
    return (
        <section className='our-best'>
            <div className="container">
                <h2>Our Best</h2>
                <CoffeeList/>
            </div>            
        </section>
    );
};

export default CofeeBest;