const express = require("express");
const app = express();
const cors = require("cors");
const rourterData = require("./Routes/data");
const port = process.env.PORT || 8010

app.use(cors());
app.use ("/api", rourterData)

app.listen(port, () =>{
    
    console.log("WORKING......");
})