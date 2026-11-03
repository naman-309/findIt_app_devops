import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>FindIt</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/browse">Browse Items</Link>
                <Link to="/report">Report Item</Link>
            </div>
        </nav>
    );
}

export default Navbar;