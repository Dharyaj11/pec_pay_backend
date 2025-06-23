
const express=require('express');
const UserRouter=require("./user")
const accountRouter=require("./accounts")

const router=express.Router();

router.use("/user",UserRouter)
router.use("/account", accountRouter);

module.exports=router;
