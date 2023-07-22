interface EventProps {
    id: string
    name: string
    date: Date
    expectedPublic: number
    description?: string
    subscribed: boolean
}

export default EventProps;