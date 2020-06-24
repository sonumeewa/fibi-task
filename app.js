const express = require('express');
const connectDB = require('./config/db');
const { response } = require('express');
const app = express();

// Connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Define routes
app.use('/', function (req, res) {
  response.send('Hello from fibi task app');
});
app.use('/api', require('./routes/image'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(' Server started on port: ' + PORT));
