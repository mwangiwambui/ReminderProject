const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();


app.set("view engine", "hbs");
app.set("views", path.join(__dirname,"/views"));


app.get("/", (res, req) => {
    res.render("index", {
        author: "Arash Arora"
    })
})

app.listen(3002, (req,res) => {
    console.log("Server running on 3002");
})