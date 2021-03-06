const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true}
).then(() => {
    console.log("MongoDB database connection established successfully");
}).catch((err) => {
    console.log(err);
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
