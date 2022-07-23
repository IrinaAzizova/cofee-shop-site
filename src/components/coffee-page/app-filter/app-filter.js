import './app-filter.scss';

const AppFilter = () => {
    const btnsData = [
        {filter: 'Brazil'},
        {filter: 'Kenya'},
        {filter: 'Columbia'}
    ];

    const btns = btnsData.map(each => {
        return (
            <button data-filter={each.filter} key={each.filter}>{each.filter}</button>
        );
    })

    return (
        <div className="searh-panel__btns">
            <p>or filter</p>
            {btns}
        </div>
    )
};

export default AppFilter;