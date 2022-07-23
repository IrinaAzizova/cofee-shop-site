import { Fragment } from "react";

import MainSection from "./main-section/main-section";
import AboutUs from "./about-as-section/about-us-section";

const MainPage = () => {
    return (
        <Fragment>
            <MainSection/>
            <AboutUs/>
        </Fragment>
    )
}

export default MainPage;