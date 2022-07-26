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
            coffeeData: this.props.coffeeData,
            currentAbout: [{header: aboutData[1].header, descr: aboutData[1].descr, country: '', price: 0, img: aboutData[1].img}]
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

    onUpdateAbout = (header, descr, country, price, img) => {
        this.setState(({currentAbout}) => {
            const current = currentAbout.map(item => {
                item.header = header;
                item.descr = descr;
                item.country = country;
                item.price = price;
                item.img = img;
                return item;
            });
            return {
                currentAbout: current
            }
        });
    }

    render() {
        const {header, descr, country, price, img} = this.state.currentAbout[0];

        return (
            <Fragment>
                <HeaderSection h1='Our coffee'/>
                <AboutSection
                    header={header}
                    descr={descr}
                    country={country}
                    price={price}
                    img={img}/>

                <section className="search-panel">
                        <AppSearch
                            onSearch={this.onSearch}/>
                        <AppFilter onUpdateCoffeeList={this.onUpdateCoffeeList}/>                    
                </section>

                <div className="showcase">
                    <CoffeeList
                        coffeeData={this.state.coffeeData}                    
                        best={false}
                        count={6}
                        onUpdateAbout={this.onUpdateAbout}/>
                </div>
                <Footer/>
                
            </Fragment>
        )
    }
};

export default CoffeePage;