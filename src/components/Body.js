import Item from "./Item";
import ItemList from "./ItemList";
import Filter from "./Filter"
import { useState, useEffect } from "react";
import Cart from './Cart'

export default function Body() {
    const data = [
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/4/item-200000007383910594_1668353593.jpg',
            price: 16.99,
            label: 'Strawberry Matcha',
            Nutrition: 20,

        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/2/item-200000007462544492_1589366582.jpg',
            price: 8.99,
            label: 'Black Sesame Latte',
            Nutrition: 200,
        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/4/item-200000009579708494_1604317526.jpg',
            price: 2.75,
            label: 'Iced Tea',
            Nutrition: 0,
        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/1/item-200000018501674581_1654260234.jpg',
            price: 6.99,
            label: 'Dalgona Latte',
            Nutrition: 50,
        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/5/item-200000005311890475_1587654499.jpg',
            price: 6.99,
            label: 'Dirty Matcha',
            Nutrition: 45,
        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/5/item-200000009519350175_1604023798.jpg',
            price: 9.99,
            label: 'Mocha Latte',
            Nutrition: 0,
        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/7/item-200000008783006187_1599295047.jpg',
            price: 7.75,
            label: 'Masala Chai Latte',
            Nutrition: 75,
        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/6/item-200000007764664046_1592216146.jpg',
            price: 9.99,
            label: 'Lavendar Hojicha Latte',
            Nutrition: 100,
        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/5/item-200000005311890485_1584478569.jpg',
            price: 7.12,
            label: 'Nitro Coffee',
            Nutrition: 0,

        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/3/item-200000010032054603_1668354159.jpg',
            price: 8.00,
            label: 'Sipping Chocolate',
            Nutrition: 300,
        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/5/item-200000009531718085_1604023649.jpg',
            price: 7.00,
            label: 'Ube Latte',
            Nutrition: 100,
        },
        {
            photo: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-38231000000000000/menu/items/1/item-200000020248604311_1668354366.jpg',
            price: 4.99,
            label: 'Lavendar Lemonade',
            Nutrition: 100,
        },
    ]

    const [items, setItems] = useState(data)
    const [calType, setCalType] = useState('All')
    const [sortType, setSortType] = useState('All')
    const [cart, setCart] = useState([])
    const [priceType, setPriceType] = useState('All')
    const [total, setTotal] = useState(0)

    function handleAddToCart(label, price) {
        let newItem = data.filter(item => item.label === label)[0]
        let tmp = [...cart]
        let newTotal = total + price
        console.log(newTotal)
        tmp.push(newItem)
        newTotal = newTotal * 100;
        newTotal = Math.round(newTotal)
        setTotal(newTotal / 100)
        setCart(tmp)
    }
    function handleRemoveFromCart(index, price) {
        let newCart = [...cart];
        newCart = newCart.filter((item, ind) => {
            return ind !== index
        })
        let newTotal = total - price;
        newTotal = newTotal * 100;
        newTotal = Math.round(newTotal)
        setTotal(newTotal / 100)

        setCart(newCart)
    }
    function resetCart() {
        setCart([])
        setTotal(0)
    }


    function handleCal(value) {

        setCalType(value)
    }

    function handlePrice(value) {

        setPriceType(value)
    }
    useEffect(() => {
        let tmp = [...data]
        if (calType !== "All") {
            tmp = tmp.filter(item => item.Nutrition < 100)
        }
        if (priceType !== "All") {
            tmp = tmp.filter(item => item.price < 7.00)
        }
        if (sortType !== "All") {
            tmp = tmp.sort((a, b) => a.price - b.price)
        }
        setItems(tmp)
    }, [calType, priceType, sortType])

    function handleSort(value) {
        if (value === 'All') {
            setItems(items)
        } else {
            const tmp = items.sort((a, b) => a.price - b.price)
            setItems(tmp)
        }
        setSortType(value)

    }

    return (

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            flexWrap: "wrap"

        }}>
            <Filter handleCal={handleCal} calType={calType} sortType={sortType} handleSort={handleSort} handlePrice={handlePrice} priceType={priceType} total={total} resetCart={resetCart} />
            <ItemList items={items} handleAddToCart={handleAddToCart} />
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />

        </div>
    )
}