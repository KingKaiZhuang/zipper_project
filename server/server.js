const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../dist'))); // 提供 dist 目錄中的靜態文件

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html')); // 對所有路徑都提供 index.html
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
