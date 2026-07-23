require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static Files
app.use("/admin", express.static(path.join(__dirname, "adminpanel")));
app.use("/frontend", express.static(path.join(__dirname, "../frontend")));

// Routes
app.use("/api/about", require("./routes/aboutPageRoute"));
app.use("/api/home", require("./routes/homePageRoute"));
app.use("/api/blog", require("./routes/blogPageRoute"));
app.use("/api/destination", require("./routes/destinationRoute"));
app.use("/api/package", require("./routes/packageRoute"));
app.use("/api/package-detail", require("./routes/packageDetailRoute"));
app.use("/api/index", require("./routes/indexRoute"));

// Pages
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "adminpanel", "admin.html"));
});

// Pages
app.get("/adminabout", (req, res) => {
    res.sendFile(path.join(__dirname, "adminpanel", "adminabout.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index/index.html"));
});

app.get("/frontend", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/about/about.html"));
});

// Root
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index/index.html"));
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("========================================");
    console.log(`🏠 API Home        : http://localhost:${PORT}/frontend/index/index.html`);
    console.log(`🌐 Frontend        : http://localhost:${PORT}/frontend/index/index.html`);
    console.log(`🛠️ Admin Panel     : http://localhost:${PORT}/admin`);
    console.log(`🛠️ Admin Panel     : http://localhost:${PORT}/adminabout`);
    console.log("----------------------------------------");
    console.log(`📄 Home API        : http://localhost:${PORT}/frontend/index/index.html`);
    console.log(`📄 About API       : http://localhost:${PORT}/api/about`);
    console.log(`📄 Blog API        : http://localhost:${PORT}/api/blog`);
    console.log(`📄 Index API       : http://localhost:${PORT}/api/index`);
    console.log(`📄 Destination API : http://localhost:${PORT}/api/destination`);
    console.log(`📄 Package API     : http://localhost:${PORT}/api/package`);
    console.log(`📄 Package Detail  : http://localhost:${PORT}/api/package-detail`);
    console.log("========================================");
});

