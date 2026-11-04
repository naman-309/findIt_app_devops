function Home() {
    return (
        <div className="home">
            <h1>Welcome to FindIt</h1>

            <p>
                Lost something? Found something?
                Help people reconnect with their belongings.
            </p>

            <div className="home-buttons">
                <button>Report Lost Item</button>
                <button>Report Found Item</button>
            </div>

            <h2>Recent Listings</h2>

            <p>No items available yet.</p>
        </div>
    );
}

export default Home;