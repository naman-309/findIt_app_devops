
import { useState } from "react";

function ReportLost() {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const itemData = {
            itemName,
            category,
            description,
            location,
        };

        console.log("Lost Item Data:", itemData);
        alert("Lost item form submitted!");

        // Clear the form
        setItemName("");
        setCategory("");
        setDescription("");
        setLocation("");
    };

    return (
        <div className="page">
            <h1>Report Lost Item</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item name"
                    value={itemName}
                    onChange={(event) => setItemName(event.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    required
                />

                <textarea
                    placeholder="Describe your lost item"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    required
                />

                <button type="submit">Submit Lost Item</button>
            </form>
        </div>
    );
}

export default ReportLost;
