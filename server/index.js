const express = require('express');
const cors = require('cors');
const portfolioRoute = require('./routes/portfolio')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/portfolio', portfolioRoute);

app.get('/', (req, res) => res.send('API is running'));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
