import express from 'express'
import cors from 'cors'
import User from './user.js'

// EXPRESS
const app = express()
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

// Sort of calling the User file after importing :)
User(app)

app.get("/", (req,res) => {
  res.send(`Server is running on port: ${port}`);
})

app.listen(port, () => {
  console.log("Server running well")
})