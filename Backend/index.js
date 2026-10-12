const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/AuthRoute");
const contactRoutes = require("./routes/ContactRoute");
const pinRoutes = require("./routes/PinRoute");


dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth",authRoutes);
app.use("/api/contact",contactRoutes);
app.use("/api/pin",pinRoutes);

















const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

























app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
