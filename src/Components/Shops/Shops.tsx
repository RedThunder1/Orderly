import './Shops.css'

function renderShops() {
    //Send request to backend for stores.


}


/*TODO:
    Open shop page:
        Create shop page.
        Wrap shop with link and open shop page, pass data about opened shop.
        Request shop data from backend to load onto the page.
*/
export default function Shops() {
    return (
        <div className="shops">
            <div className="options">
                <input className="searchbar" type="text" placeholder="Search" />
                <div className="filter">Filter</div>
            </div>

            <h2>Featured Shops</h2>
            <div className="shops_container">
                <div className="shop">
                    <div className="shop_info">
                        <h3>Example Shop</h3>
                        <h4>Distance/rating or some other info here</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}