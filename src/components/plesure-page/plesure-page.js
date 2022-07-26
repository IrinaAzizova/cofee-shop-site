import { Fragment } from "react";

import { aboutData, coffeeData } from "../coffee-data/cofeeData";
import HeaderSection from "../header-section/header-section";
import Footer from '../footer/footer';
import CoffeeList from "../coffee-list/coffee-list";
import AboutSection from "../about-section/about-section";


const PlesurePage = () => {

    const {header, descr, country, price, img} = aboutData[0];
    return (
        <Fragment>
            <HeaderSection h1='For your pleasure'/>
            <AboutSection 
                header={header}
                descr={descr}
                country={country}
                price={price}
                img={img}/>
            <CoffeeList
                coffeeData={coffeeData}
                best={false}
                click={false}/>
            <Footer/>
        </Fragment>
    );
};

export default PlesurePage;