const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4200;

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    AccessControlAllowHeaders: 'Content-Type, Authorization',
    AccessControlAllowOrigin: '*',
}));
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'dist/career-app')));

// Serve index.html for all routes (useful for SPAs)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/career-app', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
