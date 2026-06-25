const express = require("express");
const mongoose = require("mongoose");

const projectRoutes = require("./routes/projectRoutes");

const app = express();


// Middleware
app.use(express.json());


// Test API
app.get("/", (req, res) => {
    res.json({
        message: "Project API running successfully"
    });
});


// Project Routes
app.use("/api/projects", projectRoutes);


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/rishika")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("MongoDB Error:", error.message);
});


// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});