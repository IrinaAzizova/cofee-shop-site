import './nav-links.scss';
import logoBeansWhite from './logo-beans-white.svg';
import logoBeansBlack from './logo-beans-black.svg';


const NavLinks = ({color}) => {
    const beansColor = color === 'black' ? logoBeansBlack : logoBeansWhite
    return (
        <ul>
            <li><a href="#"><img src={beansColor} alt="logo" />Cofee house</a></li>
            <li><a href="#">Our coffee</a></li>
            <li><a href="#">For your plesure</a></li>
        </ul>
    );
};

export default NavLinks;