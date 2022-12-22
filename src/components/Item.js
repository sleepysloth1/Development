export default function Item({ photo, price, label, Nutrition, handleAddToCart }) {

    return (
        <div>
            <img src={photo} />
            <h1>${price}</h1>
            <h1>{label}</h1>
            <h1>{Nutrition} Cals</h1>
            {/*<h1>{handleAddToCart} Add to cart</h1> */}
            <button type="button" class="btn btn-secondary">Add to Cart</button>
            <button type="button" class="btn btn-secondary">Remove from Cart</button>



        </div>

    )


}