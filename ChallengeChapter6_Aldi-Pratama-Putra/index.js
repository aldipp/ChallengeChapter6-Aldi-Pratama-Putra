const express = require ("express")
const app = express()
const Port = 3000
const routes = require ("./routes")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/public", express.static("public"))
app.use(routes)

app.listen(Port, () => {
    console.log(`I LOVE YOU ${Port}`);
})