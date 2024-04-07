const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/game", (req, res) => {
    res.send("hello world");
});

app.listen(5000);

