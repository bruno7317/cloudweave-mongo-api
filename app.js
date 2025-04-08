const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors({origin: "*"}))

const port = 7000

app.get("/", (req, res) => {
    res.send("Mongo API works!")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})