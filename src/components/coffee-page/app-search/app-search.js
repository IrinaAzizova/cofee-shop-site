import { Component } from 'react';

import './app-search.scss';

class AppSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }
    
    onSearch = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    render() {
        return (
            <form className='search-form'>
                <label htmlFor="search">Lookiing for</label>
                <input type="text" id='search' 
                    placeholder='start typing here...'
                    value={this.state.searchValue}
                    onChange={this.onSearch}/>
            </form>        
        );
    }
    
};

export default AppSearch;