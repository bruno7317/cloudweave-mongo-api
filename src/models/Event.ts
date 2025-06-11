import { Document, model, Schema } from "mongoose";

export interface IEvent extends Document {
    turn: number
    actor: string
    action: string
    resource?: string
    quantity?: number
}

const EventSchema = new Schema<IEvent>({
    turn: { type: Number, required: true },
    actor: { type: String, required: true },
    action: { type: String, required: true },
    resource: {type: String, required: false },
    quantity: { type: Number, required: false }
})

export const Event = model<IEvent>('Event', EventSchema)