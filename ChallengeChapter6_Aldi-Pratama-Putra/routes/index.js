const express = require ("express")
const route = express.Router()
const userRoute = require ("./userRoute")
const homeRoute = require("./homeRoute")

route.use("/", homeRoute)
route.use("/account", userRoute)


module.exports = route