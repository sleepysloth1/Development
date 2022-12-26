import Item from "./Item";

import '../css/itemList.css';

export default function ItemList({ items, handleAddToCart }) {
    return (
        <div id='itemWrapper'>
            {items.map((item) => (
                <Item
                    photo={item.photo}
                    price={item.price}
                    label={item.label}
                    Nutrition={item.Nutrition}
                    handleAddToCart={handleAddToCart}
                />
            ))}

        </div>
    )
}