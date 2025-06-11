import express from "express"
import eventRoute from "./src/routes/event"
import cors from "cors"
import { connectToMongo } from "./src/db/mongoose"

const app = express()

app.use(cors({ origin: "*" }))
app.use(express.json())

app.use("/event", eventRoute)

const port = 7000

connectToMongo().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err)
    process.exit(1)
})
