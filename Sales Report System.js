// Express server code for serving sales report data
app.get('/sales-report', (req, res) => {
    // Retrieve sales data from the database
    SalesInventory.find({})
        .then(sales => {
            res.json(sales); // Send sales data as JSON response
        })
        .catch(error => {
            console.error('Error fetching sales data:', error);
            res.sendStatus(500); // Send error response
        });
});
