import { response } from "express";
import { MongoClient } from "mongodb"

const User = (app) => {
    const uri =
    "mongodb+srv://Latinas:Latinas@cluster0.djw59.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    const client = new MongoClient(uri)

    client.connect();
    // console.log(client)

    app.get('/users', async (req,res) => {
        const data = await client
        .db("datesBooked")
        .collection("users")
        .find({}).toArray((error, result) => {
            if(error) throw error
            res.send(result)
        })
    })

    app.get("/login", async (req,res) => {
        const result = await client
        .db("datesBooked")
        .collection("users")
        .findOne(req.body)
        
        console.log(req.body);
        console.log(result)
        res.status(200).json(result)
    })

    app.post("/users", async (req, res) => {
        const result = await client
        .db("datesBooked")
        .collection("users")
        .insertOne(req.body)

        console.log(req.body)
        res.json(req.body)
    })

    app.delete("/users", async (req, res) => {
        const result = await client
        .db("datesBooked")
        .collection("users")
        .deleteOne(req.body)

        console.log(req.body)
        res.json(req.body)
    })


}

export default User;