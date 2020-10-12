const express = require('express');

const app = express();
const port = 4000;

app.use(() => {
    console.log(`Server Running on Port ${port}`);
})

app.listen(port);