const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    // res.send('Hello raj!');
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
});