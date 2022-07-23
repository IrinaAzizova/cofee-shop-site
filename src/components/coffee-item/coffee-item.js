import './coffee-item.scss';

const CoffeeItem = ({name, price, img, id}) => {
    return (
        <div className="coffee-item" key={id}>
            <img src={img} alt={name} />
            <p className='coffee-item__header'>{name}</p>
            <p className='coffee-item__price'>{price + '$'}</p>
        </div>
    );
};

export default CoffeeItem;