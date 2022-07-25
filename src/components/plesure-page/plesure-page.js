import { Fragment } from "react";

import { aboutData, coffeeData } from "../coffee-data/cofeeData";
import HeaderSection from "../header-section/header-section";
import Footer from '../footer/footer';
import CoffeeList from "../coffee-list/coffee-list";
import AboutSection from "../about-section/about-section";


const PlesurePage = () => {

    const {header, descr} = aboutData[0];
    return (
        <Fragment>
            <HeaderSection h1='For your pleasure'/>
            <AboutSection 
                header={header}
                descr={descr}/>
            <CoffeeList
                coffeeData={coffeeData}
                best={false}/>
            <Footer/>
        </Fragment>
    );
};

export default PlesurePage;