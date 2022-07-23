import './header.scss';

import logo from './logo-cofee-beans.svg'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#"><img src={logo} alt="logo" />Cofee house</a></li>
                    <li><a href="#">Our coffee</a></li>
                    <li><a href="#">For your plesure</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;