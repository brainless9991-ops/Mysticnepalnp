require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// ----- Middleware -----
app.use(cors());
app.use(express.json());

// ----- Static File Mounts (must come BEFORE page routes) -----

// Frontend pages – each folder’s assets are served at /<foldername>
app.use("/index", express.static(path.join(__dirname, "../frontend/index")));
app.use("/about", express.static(path.join(__dirname, "../frontend/about")));
app.use("/blog", express.static(path.join(__dirname, "../frontend/blog")));
app.use("/booking", express.static(path.join(__dirname, "../frontend/booking")));
app.use("/contact", express.static(path.join(__dirname, "../frontend/contact")));
app.use("/destinations", express.static(path.join(__dirname, "../frontend/destinations")));
app.use("/pack", express.static(path.join(__dirname, "../frontend/pack")));

// Fallback for any other frontend assets (images, shared files)
app.use("/frontend", express.static(path.join(__dirname, "../frontend")));

app.use(express.static(path.join(__dirname, "../frontend/index")));

// Admin panel
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

// ----- 404 Fallback (optional) -----
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
    console.log(`📄 Blog       : http://localhost:${PORT}/blog`);
    console.log(`📄 Booking    : http://localhost:${PORT}/booking`);
    console.log(`📄 Contact    : http://localhost:${PORT}/contact`);
    console.log(`📄 Destinations : http://localhost:${PORT}/destinations`);
    console.log(`📄 Pack       : http://localhost:${PORT}/pack`);
    console.log(`🛠️ Admin      : http://localhost:${PORT}/admin`);
    console.log(`🛠️ AdminAbout : http://localhost:${PORT}/adminabout`);
    console.log("----------------------------------------");
    console.log(`📡 API endpoints:`);
    console.log(`   /api/about, /api/home, /api/blog, /api/destination, /api/package, /api/package-detail, /api/index`);
    console.log("========================================");
});