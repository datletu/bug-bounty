const express = require('express');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173',
};

const app = express();
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ "message": 'Hello from server!' });
});

app.listen(3000, () => {
  console.log('Starting server at localhost:3000');
});