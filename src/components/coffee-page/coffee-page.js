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
    
    onSearch = (searchValue) => {
        if (searchValue.length === 0) {
            this.setState({
                coffeeData: this.props.coffeeData
            })
        } else {
            this.setState(({coffeeData}) => {
                const newData = this.props.coffeeData.filter(item => item.name.toLowerCase().indexOf(searchValue) > -1);
                return {
                    coffeeData : newData 
                }
            });
        }
        
        
    } 

    render() {
        const {header, descr} = aboutData[0]

        return (
            <Fragment>
                <HeaderSection h1='Our coffee'/>
                <AboutSection
                    header={header}
                    descr={descr}/>

                <section className="search-panel">
                        <AppSearch
                            onSearch={this.onSearch}/>
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