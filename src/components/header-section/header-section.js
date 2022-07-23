import './header-section.scss';

import Header from '../header/header';

const HeaderSection = ({h1}) => {
    return (
        <section className="header">
            <Header/>
            <div className="container">
                <h1>{h1}</h1>
            </div>
            
        </section>
    );
}

export default HeaderSection;