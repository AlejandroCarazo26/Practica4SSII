import { ObjectId } from "mongodb"

export type Projects = {
    _id?: ObjectId, 
    name: string, 
    description?: string,
    startDate: Date,
    endDate: Date,
    owner: ObjectId,
    members: Array <ObjectId>
}

