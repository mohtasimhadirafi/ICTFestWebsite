const express = require("express")
const app = express()
const userRoutes = require("./routes/userRoutes.routes")
const logger = require("./middlewares/app.middlewares")

app.use(express.static('public'))
app.use(logger)
app.use(userRoutes)

app.get("/", (req, res) => {
    res.sendFile("home.html", { root: "./views"})
})

app.get("/dashboard", (req, res) => {
    res.send(
        "<H1>Dashboard</H1>"
    )
})

app.use((req, res) => {
    res.send(
        "<H1>Error 404!</H1><br><H2>Page Doesn't Exist</H2>"
    )
})

module.exports = app