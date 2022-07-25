import './coffee-list.scss';

import CoffeeItem from '../coffee-item/coffee-item';

const CoffeeList = ({coffeeData, best}) => {
    let items;

    if (best) {
        items = coffeeData.filter(item => item.best);
    } else {
        items = coffeeData;
    }

    const coffeeItems = items.map(item => {
        return (
            <CoffeeItem
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                best={best}/>
        );
    });

    return (
        <div className="coffee-list">
                    {coffeeItems}
        </div>
    )
};

export default CoffeeList;