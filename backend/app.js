// app.js or routes.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
}));
  

app.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        console.log("result", result.rows[0]);
        // res.json(result.rows[0]);
        console.log("backend accessed", "hello world");
        res.json({result: "Hello workd"});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/api', async (req, res) => {
    try {
        // res.json(result.rows[0]);
        console.log("backend accessed", "hello world");
        res.json({result: "Hello workd"});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
