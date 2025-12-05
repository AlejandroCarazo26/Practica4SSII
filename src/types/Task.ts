import { ObjectId } from "mongodb"

export type Task = {
    _id?: ObjectId,
    title: string,
    projectId: string,
    assignedTo?: ObjectId,
    status: string,
    priority: string,
    dueDate: Date
}