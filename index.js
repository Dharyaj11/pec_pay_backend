const express = require("express");
const cors=require("cors");
const app=express(); // check error
app.use(cors());
app.use(express.json());

const mainRouter=require("./routes/index")

app.use("/api/v1",mainRouter);


// mongodb+srv://admin:<password>@pay.hpdmfif.mongodb.net/

app.listen(3000);
