import { Fragment } from "react";

import './coffee-page.scss';

import HeaderSection from "../header-section/header-section";
import Footer from "../footer/footer";
import AboutSection from "./about-section/about-section";
import CoffeeList from "../coffee-list/coffee-list";
import AppSearch from "./app-search/app-search";
import AppFilter from "./app-filter/app-filter";

const CoffeePage = () => {
    return (
        <Fragment>
            <HeaderSection h1='Our coffee'/>
            <AboutSection/>
            <section className="search-panel">
                    <AppSearch/>
                    <AppFilter/>
                
            </section>
            <div className="showcase">
                <CoffeeList best={false}/>
            </div>
            <Footer/>
            
        </Fragment>
    )

};

export default CoffeePage;