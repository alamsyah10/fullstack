// app.js or routes.js
const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
