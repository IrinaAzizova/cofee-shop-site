import './app-filter.scss';

const AppFilter = (props) => {
    const btnsData = [
        {filter: 'All'},
        {filter: 'Brazil'},
        {filter: 'Kenya'},
        {filter: 'Columbia'}
    ];

    const btns = btnsData.map(({filter}) => {
        return (
            <button 
                data-filter={filter} 
                    key={filter}
                    onClick={() => {props.onUpdateCoffeeList(filter)}}>
                    {filter}</button>
        );
    });

    return (
        <div className="searh-panel__btns">
            <p>or filter</p>
            {btns}
        </div>
    );
};

export default AppFilter;