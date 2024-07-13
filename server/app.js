const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Synergy's Server is Energetic!"
    });
});

app.listen(process.env.PORT || 5500, (err) => {
    if(!err)
        console.log("SYSTEM MESSAGE: Server started at Port " + (process.env.PORT || 5500));
    else
        console.log("SYSTEM ERROR: Failed to start Server! Error:\n"+err);
});
