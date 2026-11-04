function ReportLost() {
    return (
        <div className="page">
            <h1>Report Lost Item</h1>

            <form>
                <input type="text" placeholder="Item name" />
                <input type="text" placeholder="Category" />
                <textarea placeholder="Describe your lost item" />
                <input type="text" placeholder="Location" />

                <button type="submit">Submit Lost Item</button>
            </form>
        </div>
    );
}

export default ReportLost;