export default function Filter({ handleCal, calType, sortType, handleSort }) {
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
                    Less than 100 </label>
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
            </div>
        </div>
    )
}