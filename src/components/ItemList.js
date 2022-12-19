import Item from "./Item";
/*i added this line below to import the itemList.css that i made to style
*/
import '../css/itemList.css';


export default function ItemList({ items, handleAddToCart }) {
    return (
        // Items
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