import {Db, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();


let client: MongoClient;
let miBaseDeDatosBonita: Db;
const dbName = "Practica4";

export const connectToMongo = async() => {
    try{

        const mongoUrl = process.env.MONGO_URL;

        client = new MongoClient(mongoUrl!);
        await client.connect();
        miBaseDeDatosBonita = client.db(dbName);

        console.log("Conectado al Mongo!")
    }
    catch(err){
        console.log("Error de Mongo: ", err);
    }

}

export const getDb = () : Db => miBaseDeDatosBonita;