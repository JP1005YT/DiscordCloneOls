import express from "express";
const app = express();

app.use(express.static("public"))

app.listen("3333",()=>{
    console.log("Server Aberto : http://localhost:3333/")
})