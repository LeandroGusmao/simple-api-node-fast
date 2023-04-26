const express = require("express");
const sequelize = require('./db');

const app = express();

sequelize.sync().then(() => {
  console.log('Database is connected');
});

app.use(express.json());

app.listen(3000, () => {
    console.log('Server started on port: 3000');
})