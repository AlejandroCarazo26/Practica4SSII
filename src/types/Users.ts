import { ObjectId } from "mongodb"

export type Users = {
    _id?: ObjectId, 
    username: string, 
    email: string,
    password: string,
    createdAt: Date
}