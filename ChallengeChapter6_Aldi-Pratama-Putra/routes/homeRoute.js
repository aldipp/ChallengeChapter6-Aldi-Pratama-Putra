const express = require("express")
const route = express.Router()
const HomeController = require("../controllers/homeController")

route.get("/", HomeController.mainPage)
route.get("/about", HomeController.about)
route.get("/features", HomeController.features)
route.get("/systemRequirements", HomeController.systemRequirements)
route.get("/topScores", HomeController.topScores)
route.get("/subscribe", HomeController.subscribe)

module.exports = route