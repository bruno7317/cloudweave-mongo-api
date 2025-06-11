import { Router } from "express"
import { getEvents, postEvents } from "../controllers/event"

const router = Router()

router.get("/", getEvents)

router.post("/", postEvents)

export default router