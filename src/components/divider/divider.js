import './divider.scss';
import coffeeBeans from './coffee-beans.svg';

const BeensDivider = () => {
    return (
        <div className='beans-divider'>
            <img src={coffeeBeans} alt="coffee beans" />
        </div>
    );
};

export default BeensDivider