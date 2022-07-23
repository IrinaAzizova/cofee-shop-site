import './divider.scss';
import coffeeBeansWhite from './coffee-beans-white.svg';
import coffeeBeansBlack from './coffee-beans-black.svg'; 

const BeensDivider = ({color}) => {
    const beansColor = color === 'white' ? coffeeBeansWhite : coffeeBeansBlack;
    return (
        <div className='beans-divider'>
            <img src={beansColor} alt="coffee beans"/>
        </div>
    );
};

export default BeensDivider