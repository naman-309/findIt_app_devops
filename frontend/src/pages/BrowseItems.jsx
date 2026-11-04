function BrowseItems() {
    return (
        <div className="page">
            <h1>Browse Items</h1>
            <p>Find lost and found items here.</p>

            <div className="item-card">
                <h3>Black Wallet</h3>
                <p>Category: Accessories</p>
                <p>Status: Lost</p>
            </div>

            <div className="item-card">
                <h3>Blue Backpack</h3>
                <p>Category: Bags</p>
                <p>Status: Found</p>
            </div>
        </div>
    );
}

export default BrowseItems;