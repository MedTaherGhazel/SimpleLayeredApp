const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static('../presentation'));

const dataFilePath = path.join(__dirname, '../data/data.json');
app.get('/api/message', (req, res) => {
    fs.readFile(dataFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading JSON data" });
        }
        const jsonData = JSON.parse(data);
        res.json({ message: jsonData.message });
    });
  
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
