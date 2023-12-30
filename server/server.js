const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/home');
const searchRouter = require('./routes/search');

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});