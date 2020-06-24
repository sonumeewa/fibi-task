const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Define routes
app.use('/api', require('./routes/image'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(' Server started on port: ' + PORT));
