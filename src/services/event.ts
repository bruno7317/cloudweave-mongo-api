import { Event, IEvent } from "../models/Event"

export async function fetchEvents() {
    try {
        const events = await Event.find().sort({ turn: 1, actor: 1}).lean()
        return events
    } catch (error) {
        console.error(`Failed to fetch events: ${error}`)
    }
}

export async function putEvents(events: IEvent[]): Promise<IEvent[]> {
    if (!Array.isArray(events) || events.length === 0) {
        throw new Error("Request body must be an array of Events")
    }
    return await Event.insertMany(events)
}