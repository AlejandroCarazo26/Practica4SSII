import { get } from "axios";
import { getDb } from "../db/mongo";
import bcrypt from "bcryptjs"
import { ObjectId } from "mongodb";


const COLLECTION = "Users";

export const createUser = async (email: string, password: string, username: string) => {
    const db = getDb();
    const passwordEncriptada = await bcrypt.hash(password, 10);

    const result = await db.collection(COLLECTION).insertOne({
        email, 
        password: passwordEncriptada,
        username,
        createdAt: Date.now()
    });

    return result.insertedId.toString();
}

export const validateUser = async (email: string, password: string) => {
    const db = getDb();
    const user = await db.collection(COLLECTION).findOne({email});

    if(!user) return null;

    const comparacion = await bcrypt.compare(password, user.password);

    if(!comparacion) return null;

    return user;
}

export const findUserById= async (id: string) => {
    const db = getDb();
    return await db.collection(COLLECTION).findOne({_id: new ObjectId(id)});
}