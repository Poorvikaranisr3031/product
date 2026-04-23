const express = require("express");
const app = express();

// Set EJS as view engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static("public"));

// Route
app.get("/", (req, res) => {
    res.render("home", { 
        name: "Ravikumar",
        course: "Node.js"
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
