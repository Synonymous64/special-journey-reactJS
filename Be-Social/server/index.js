const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js')
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

// * Establishing middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// * Building first route
app.get('/', (req, res) => {
    res.status(200).send('hello world')
});

app.use('/auth', authRoutes);
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));