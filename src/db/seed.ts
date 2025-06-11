import { Event } from "../models/Event"
import { connectToMongo } from "./mongoose"

const run = async () => {
    await connectToMongo()

    await Event.deleteMany({})
    await Event.insertMany([
        { turn: 1, actor: 'china', action: 'buy from canada', resource: 'oil', quantity: 2 },
        { turn: 1, actor: 'usa', action: 'sell to china', resource: 'oil', quantity: 2 },
        { turn: 1, actor: 'brazil', action: 'produce', resource: 'food', quantity: 5 },
        { turn: 1, actor: 'germany', action: 'consume', resource: 'electricity', quantity: 3 },
        { turn: 2, actor: 'china', action: 'build refinery', resource: 'infrastructure', quantity: 1 },
        { turn: 2, actor: 'canada', action: 'sell to germany', resource: 'natural gas', quantity: 4 },
        { turn: 2, actor: 'usa', action: 'import from brazil', resource: 'food', quantity: 3 },
        { turn: 2, actor: 'germany', action: 'invest in renewables', resource: 'electricity', quantity: 2 },
        { turn: 3, actor: 'china', action: 'export to usa', resource: 'steel', quantity: 6 },
        { turn: 3, actor: 'brazil', action: 'expand farms', resource: 'food', quantity: 4 }
    ])

    console.log(`Seeded MongoDB`)
    process.exit(0)
}

run()