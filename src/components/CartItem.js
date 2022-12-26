export default function CartItem({ photo, price, label, Nutrition, handleRemoveFromCart, index }) {

    return (
        <div>

            <img src={photo} />
            <h1>${price}</h1>
            <h1>{label}</h1>
            <h1>{Nutrition} Cals</h1>
            <button type="button" class="btn btn-secondary" onClick={()=>{handleRemoveFromCart(index, price)}}>Remove from Cart</button>



        </div>
        

    )


}