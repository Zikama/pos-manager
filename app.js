const express = require("express"),
    app = express(),
    PORT = process.env.PORT || 5001;

app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + "/"));
// app.use('/', require("./routes/index"));
app.listen(PORT, () => console.log(`app starting on Port ${PORT} ...`))