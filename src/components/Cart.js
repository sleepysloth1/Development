import CartItem from './CartItem'
import '../css/Cart.css';
export default function Cart({ cart, handleRemoveFromCart }) {
    return (

        <div id='CartWrapper'>
            {cart.map((item, index) => (
                <CartItem
                    index={index}
                    photo={item.photo}
                    price={item.price}
                    label={item.label}
                    Nutrition={item.Nutrition}
                    handleRemoveFromCart={handleRemoveFromCart}

                />
            ))}

        </div>
    )
}