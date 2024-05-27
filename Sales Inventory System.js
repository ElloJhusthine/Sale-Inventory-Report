// Node.js server code for handling sales inventory updates
app.post('/add-sale', (req, res) => {
    const { product, quantity, price } = req.body;
    // Update sales inventory in the database
    SalesInventory.create({ product, quantity, price })
        .then(() => {
            res.sendStatus(200); // Send success response
        })
        .catch(error => {
            console.error('Error adding sale:', error);
            res.sendStatus(500); // Send error response
        });
});
