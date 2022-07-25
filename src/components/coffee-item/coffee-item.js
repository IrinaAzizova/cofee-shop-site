import './coffee-item.scss';

const CoffeeItem = ({name, price, img, id, best}) => {
    const clazz = best ? 'coffee-item' : 'coffee-item coffee-item_all';
    return (
        <div className={clazz} key={id}>
            <img src={img} alt={name} />
            <p className='coffee-item__header'>{name}</p>
            <p className='coffee-item__price'>{price + '$'}</p>
        </div>
    );
};

export default CoffeeItem;