import { Component, Fragment } from "react";

import './coffee-page.scss';

import { aboutData } from "../coffee-data/cofeeData";

import HeaderSection from "../header-section/header-section";
import Footer from "../footer/footer";
import AboutSection from "../about-section/about-section";
import CoffeeList from "../coffee-list/coffee-list";
import AppSearch from "./app-search/app-search";
import AppFilter from "./app-filter/app-filter";


class CoffeePage extends  Component {
    constructor(props){
        super(props);
        this.state = {
            coffeeData: this.props.coffeeData
        }
    }

    onUpdateCoffeeList = (filter) => {
        if (filter === 'All') {
            this.setState({
                coffeeData: this.props.coffeeData
            });
        } else {
            this.setState({
                coffeeData: this.props.coffeeData.filter(item => item.filter === filter)
            });
        }
        
    };
    
    

    render() {
        const {header, descr} = aboutData[0]

        return (
            <Fragment>
                <HeaderSection h1='Our coffee'/>
                <AboutSection
                    header={header}
                    descr={descr}/>

                <section className="search-panel">
                        <AppSearch/>
                        <AppFilter onUpdateCoffeeList={this.onUpdateCoffeeList}/>                    
                </section>

                <div className="showcase">
                    <CoffeeList
                        coffeeData={this.state.coffeeData}                    
                        best={false}/>
                </div>
                <Footer/>
                
            </Fragment>
        )
    }
};

export default CoffeePage;