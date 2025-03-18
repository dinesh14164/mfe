const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 8080;

// Enable CORS for all requests
app.use(cors({ origin: "*" }));

// Serve static files from 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

app.listen(PORT, () => {
    console.log(`Micro Frontend Container running at http://localhost:${PORT}`);
});
