const { error } = require("console");
const express = require("express");
const {Worker} = require("worker_threads")


const app = express();
const port = 3000;

app.get("/non-blocking/",(req,res) => {
    res.status(200).send("This page is non-blocking")
})

app.get("/blocking",async (req,res) => {
    let counter = 0;
    const worker = new Worker('./worker.js');

    worker.on("message",(data)=>{

        res.status(200).send(`result is ${data}`)
    });

    worker.on("error",(error)=>{

        res.status(404).send(`an error occured ${error}`)
    })
})

app.listen(port,()=>{
    console.log(`App listening in port ${port}`)
})