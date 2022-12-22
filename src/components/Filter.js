export default function Filter({ handleCal, calType, sortType, handleSort, handlePrice, priceType, handleAddtoCart }) {
    return (
        <div style={{
            width: 200,
            backgroundColor: 'gray'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h1>Calories</h1>
                <label>
                    <input
                        checked={calType === 'All'}
                        type='radio'
                        onChange={() => handleCal('All')}
                    />
                    All </label>
                <label>
                    <input
                        checked={calType === 'Less than 100'}
                        type='radio'
                        onChange={() => handleCal('Less than 100')}
                    />
                    Less than 100 calories </label>

                <h1>Price</h1>
                <label>
                    <input
                        checked={priceType === 'All'}
                        type='radio'
                        onChange={() => handlePrice('All')}
                    />
                    All </label>
                <label>
                    <input
                        checked={priceType === 'Less than $7.00'}
                        type='radio'
                        onChange={() => handlePrice('Less than $7.00')}
                    />
                    Less than $7.00 </label>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column'

            }}>
                <h1>Sort By</h1>
                <label>
                    <input
                        checked={sortType === 'All'}
                        type='radio'
                        onChange={() => handleSort('All')}
                    />
                    All </label>
                <label>
                    <input
                        checked={sortType === 'Price low to high'}
                        type='radio'
                        onChange={() => handleSort('Price low to high')}
                    />
                    Price low to high</label>

                {/* <h1>Add to Cart</h1>
            <label>
                <input
                    checked={sortType === 'All'}
                    type='radio'
                    onChange={() => handleAddtoCart('All')}
                />
                All </label>
            <label>
                <input
                    checked={sortType === '+'}
                    type='radio'
                    onChange={() => handleAddtoCart('+')}
                />
                Add to cart</label> */}
            </div>
        </div>
    )
}