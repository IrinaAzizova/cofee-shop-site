

import './app-search.scss';

const AppSearch = () => {
    return (
        <form className='search-form'>
            <label htmlFor="search">Lookiing for</label>
            <input type="text" id='search' 
                placeholder='start typing here...'/>
        </form>
        
    );
};

export default AppSearch;