import { Request, Response } from "express"
import { fetchEvents, putEvents } from "../services/event"
import { IEvent } from "../models/Event"

export async function getEvents(req: Request, res: Response) {
    try {
        const events = await fetchEvents()
        res.json(events)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

export async function postEvents(req: Request, res: Response) {
    try {
        const inserted = await putEvents(req.body as IEvent[])
        res.status(201).json({ message: `${inserted?.length} events inserted successfully` })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}