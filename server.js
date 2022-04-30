//import express
const express = require('express');

//port destination and app expression
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//GET route


//Default response for any other request (not found)
app.use((req. res) => {
    res.status(404).end();
});

//listener at BOTTOM
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
