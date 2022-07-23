import './divider.scss';
import coffeeBeansWhite from './coffee-beans-white.svg';
import coffeeBeansBlack from './coffee-beans-black.svg'; 

const BeensDivider = ({color}) => {
    const beansColor = color === 'white' ? coffeeBeansWhite : coffeeBeansBlack;
    const dividerClass = color === 'black' ? 'beans-divider beans-divider_black' : 'beans-divider';
    return (
        <div className={dividerClass}>
            <img src={beansColor} alt="coffee beans"/>
        </div>
    );
};

export default BeensDivider