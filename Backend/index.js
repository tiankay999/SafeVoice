const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

























app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
