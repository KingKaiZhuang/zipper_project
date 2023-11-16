const express = require('express');
const path = require('path');
const hbs = require("hbs");
const app = express();

const zipperRouter = require('./router/ZipperRouter');
app.use("/zipper",zipperRouter);

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/', (req, res) => {
    res.send("success");
    console.log(123);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
