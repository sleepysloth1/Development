import Item from "./Item";

export default function ItemList({items}) {
    return (
        // Items
        <div>
            {/* {items.map((item) => (
                <h2>{item}</h2>
            ))} */}

            <Item
                photo={'https://www.berlyskitchen.com/wp-content/uploads/2022/07/Pumpkin-Spice-Latte-Featured-Image.jpg'} 
                price={'$4.99'} 
                label={'Description'}
            />
        </div>
    )
}