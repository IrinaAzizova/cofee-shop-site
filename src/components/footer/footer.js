import './footer.scss';

import NavLinks from "../nav-links/nav-links";
import BeensDivider from '../divider/divider';

const Footer = () => {
    return (
        <footer>
            <NavLinks color='black'/>
            <BeensDivider color='black'/>
        </footer>
    );
}

export default Footer;