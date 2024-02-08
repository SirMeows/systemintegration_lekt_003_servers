import express from "express"
const app = express()

app.get("/", (req,res) => {
    res.send({message:"Hello"})
})
//req.query would contain the query string, req contains request details
app.post("/postrequest", (req,res) => {
    res.send({message:"This is the other route"})
})

const PORT = 8080
app.listen(8080, () => console.log("Server is running on port:",PORT))
