import { Fragment } from "react";

import './main-page.scss';

import MainSection from "./main-section/main-section";
import AboutUs from "./about-us-section/about-us-section";
import CoffeeList from "../coffee-list/coffee-list";
import Footer from "../footer/footer";

const MainPage = ({coffeeData}) => {
    return (
        <Fragment>
            <MainSection/>
            <AboutUs/>
            <section className='our-best'>
                <div className="container">
                    <h2>Our Best</h2>
                    <CoffeeList
                        coffeeData={coffeeData}
                        best={true}
                        click={false}/>
                </div>            
            </section>
            <Footer/>
        </Fragment>
    )
}

export default MainPage;