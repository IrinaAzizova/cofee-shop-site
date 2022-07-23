import './coffee-list.scss';

import { coffeeData } from '../coffee-data/cofeeData';
import CoffeeItem from '../coffee-item/coffee-item';

const CoffeeList = ({best}) => {
    const items = best ? coffeeData.filter(item => item.best) : coffeeData;
    const coffeeItems = items.map(item => {
        return (
            <CoffeeItem
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}/>
        );
    });

    return (
        <div className="coffee-list">
                    {coffeeItems}
        </div>
    )
};

export default CoffeeList;