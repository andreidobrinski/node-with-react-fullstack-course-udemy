const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.port || 5000;
app.listen(PORT);
