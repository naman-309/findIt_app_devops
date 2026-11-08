import { useState } from "react";

function ReportFound() {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [dateFound, setDateFound] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const itemData = {
            itemName,
            category,
            description,
            location,
            dateFound,
        };

        console.log("Found Item:", itemData);

        alert("Found item submitted!");

        setItemName("");
        setCategory("");
        setDescription("");
        setLocation("");
        setDateFound("");
    };

    return (
        <div className="page">
            <h1>Report Found Item</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Found Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />

                <input
                    type="date"
                    value={dateFound}
                    onChange={(e) => setDateFound(e.target.value)}
                    required
                />

                <button type="submit">Submit Found Item</button>
            </form>
        </div>
    );
}

export default ReportFound;