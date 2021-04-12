const express = require('express');
const connectDB = require('./config/db');
const app = express();

const user = require('./User/route');
const report = require('./report/routes');
const task = require('./task/routes');

const cors = require('cors');

connectDB();
app.use(cors());
app.use(express.json({ extended: false }));

app.use('/users', user);
app.use('/tasks', task);
app.use('/reports', report);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server running in port ${PORT}`);
});
