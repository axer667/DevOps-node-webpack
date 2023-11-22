const express = require('express');

const path = require('path');
const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.listen(3000, () => {
    console.log('Express is listening on port 3000!')
})