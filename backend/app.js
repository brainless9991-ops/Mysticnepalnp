require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// ----- Middleware -----
app.use(cors());
app.use(express.json());

// ----- Static File Mounts (must come BEFORE page routes) -----

// 1. Serve /index assets (e.g., /index/style.css, /index/style.js)
app.use("/index", express.static(path.join(__dirname, "../frontend/index")));

// 2. Serve /frontend assets (for any other frontend files)
app.use("/frontend", express.static(path.join(__dirname, "../frontend")));

// 3. Serve admin panel assets
app.use("/admin", express.static(path.join(__dirname, "adminpanel")));

// ----- API Routes (these do not conflict with static files) -----
app.use("/api/about", require("./routes/aboutPageRoute"));
app.use("/api/home", require("./routes/homePageRoute"));
app.use("/api/blog", require("./routes/blogPageRoute"));
app.use("/api/destination", require("./routes/destinationRoute"));
app.use("/api/package", require("./routes/packageRoute"));
app.use("/api/package-detail", require("./routes/packageDetailRoute"));
app.use("/api/index", require("./routes/indexRoute"));

// ----- Page Routes (keep these after static and API) -----
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index/index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/about/about.html"));
});

app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/blog/blog.html"));
});

app.get("/booking", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/booking/booking.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/contact/contact.html"));
});

app.get("/destinations", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/destinations/destinations.html"));
});

app.get("/pack", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/pack/pack.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "adminpanel", "admin.html"));
});

app.get("/adminabout", (req, res) => {
    res.sendFile(path.join(__dirname, "adminpanel", "adminabout.html"));
});

// ----- Fallback (optional): if you want to catch 404s -----
app.use((req, res) => {
    res.status(404).send("Page not found");
});

// ----- Start Server -----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log("========================================");
    console.log(`🏠 Home       : http://localhost:${PORT}/`);
    console.log(`📄 About      : http://localhost:${PORT}/about`);
    console.log(`📄 blog      : http://localhost:${PORT}/blog`);
    console.log(`📄 booking      : http://localhost:${PORT}/booking`);
    console.log(`📄 contact      : http://localhost:${PORT}/contact`);
    console.log(`📄 destinations      : http://localhost:${PORT}/destinations`);
    console.log(`📄 pack      : http://localhost:${PORT}/pack`);
    console.log(`🛠️ Admin      : http://localhost:${PORT}/admin`);
    console.log(`🛠️ AdminAbout : http://localhost:${PORT}/adminabout`);
    console.log("----------------------------------------");
    console.log(`📄 Home API    : http://localhost:${PORT}/api/home`);
    console.log(`📄 About API   : http://localhost:${PORT}/api/about`);
    console.log(`📄 Blog API    : http://localhost:${PORT}/api/blog`);
    console.log(`📄 Index API   : http://localhost:${PORT}/api/index`);
    console.log(`📄 Destination : http://localhost:${PORT}/api/destination`);
    console.log(`📄 Package     : http://localhost:${PORT}/api/package`);
    console.log(`📄 Package Detail : http://localhost:${PORT}/api/package-detail`);
    console.log("========================================");
});