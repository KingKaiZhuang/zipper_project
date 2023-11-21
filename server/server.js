const express = require('express');
// const http = require('http');
const path = require('path');
// const socketIO = require('socket.io');
const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

const zipperRouter = require('./router/ZipperRouter');
app.use("/zipper", zipperRouter);

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/', (req, res) => {
    res.send("success");
    console.log(123);
});

// io.on('connection', (socket) => {
//     console.log('A user connected');
    
//     socket.on('disconnect', () => {
//         console.log('User disconnected');
//     });
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// module.exports = { io };
