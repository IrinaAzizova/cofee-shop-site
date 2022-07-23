import './main-section.scss'; 

import Header from '../header/header';
import BeensDivider from '../../divider/divider';

const MainSection = () => {
    return(
        <section className="main-section">
            <Header/>
            <div className="container">
                <h1>Everything You Love About Coffee</h1>
                <p>We makes every day full of energy and taste</p>
                <p>Want to try our beans?</p>
                <BeensDivider/>
                <button>More</button>
            </div>
            
        </section>
    );
}

export default MainSection;