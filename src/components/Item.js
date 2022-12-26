export default function Item({ photo, price, label, Nutrition, handleAddToCart ,index,  }) {

    return (
        <div>
            <img src={photo} />
            <h1>${price}</h1>
            <h1>{label}</h1>
            <h1>{Nutrition} Cals</h1>
            <button type="button" class="btn btn-secondary" onClick={()=>{handleAddToCart(label, price)}}>Add to Cart</button>



        </div>

    )


}