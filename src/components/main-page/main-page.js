import { Fragment } from "react";

import MainSection from "./main-section/main-section";
import AboutUs from "./about-as-section/about-us-section";
import CofeeBest from "./our-best-section/our-best-section";
import Footer from "../footer/footer";

const MainPage = () => {
    return (
        <Fragment>
            <MainSection/>
            <AboutUs/>
            <CofeeBest/>
            <Footer/>
        </Fragment>
    )
}

export default MainPage;