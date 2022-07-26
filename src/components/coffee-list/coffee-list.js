import './coffee-list.scss';

import CoffeeItem from '../coffee-item/coffee-item';

const CoffeeList = ({coffeeData, best,click = true, count = 9, onUpdateAbout}) => {
    let items;

    if (best) {
        items = coffeeData.filter(item => item.best);
    } else {
        items = coffeeData;
    }

    const coffeeItems = items.map((item, i) => {
        if (i < count) {
            return (
                <CoffeeItem
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    descr={item.descr}
                    country={item.filter}
                    best={best}
                    click={click}
                    onUpdateAbout={onUpdateAbout}
                    />
            );
        } else return '';
        
    });

    return (
        <div className="coffee-list">
                    {coffeeItems}
        </div>
    )
};

export default CoffeeList;