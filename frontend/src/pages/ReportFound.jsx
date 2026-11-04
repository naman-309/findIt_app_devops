function ReportFound() {
    return (
        <div className="page">
            <h1>Report Found Item</h1>

            <form>
                <input type="text" placeholder="Item name" />
                <input type="text" placeholder="Category" />
                <textarea placeholder="Describe the found item" />
                <input type="text" placeholder="Location" />

                <button type="submit">Submit Found Item</button>
            </form>
        </div>
    );
}

export default ReportFound;