import Item from "./Item";
import ItemList from "./ItemList";


// change photo input to file path,
export default function Body() {
    const testItems = [
        "test 1",
        "test 2",
        "test 3",
        "test 4",
    ]

    return (
        // Filter Section
        // Item List
        <ItemList items={testItems}/>
    )
}