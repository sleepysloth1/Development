export default function Item({photo, price, label}) {
    //change h1 to an image , do css style in this file

    return (
        <div>
            <img src={photo}/>
            <h1>{price}</h1>
            <h1>{label}</h1>
        </div>
    )
}