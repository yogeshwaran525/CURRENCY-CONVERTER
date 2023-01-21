
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();


const location =path.join(__dirname,"./public");
app.use(express.static(location));

app.set("view engine","hbs");
const htmlfiles= path.join(__dirname+"/page");
hbs.registerPartials(htmlfiles);

const partialspath = path.join(__dirname+"/views/partials")
hbs.registerPartials(partialspath)

app.use("/",require("./page"));



const port = 3200;

app.listen(port,()=>{
    console.log("Server is listenong port  "+`${port}`)
});