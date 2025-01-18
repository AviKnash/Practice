const { error } = require("console");
const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const port = 3000;
const THREAD_COUNT = 4;

// Function to create a worker
function createWorker() {
    return new Promise((res, rej) => {
        const worker = new Worker("./four-workers.js", {
            workerData: { thread_count: THREAD_COUNT },
        });

        worker.on("message", (data) => {
            res(data);
        });

        worker.on("error", (err) => {
            rej(err);
        });
    });
}

// Non-blocking route
app.get("/non-blocking/", (req, res) => {
    res.status(200).send("This page is non-blocking");
});

// Blocking route
app.get("/blocking", async (req, res) => {
    try {
        const workerPromises = [];

        // Create workers and push promises
        for (let i = 0; i < THREAD_COUNT; i++) {
            workerPromises.push(createWorker());
        }

        // Wait for all worker results
        const thread_results = await Promise.all(workerPromises);

        // Aggregate results
        const total = thread_results.reduce((acc, item) => acc + item, 0);

        res.status(200).send(`Result is ${total}`);
    } catch (err) {
        console.error("Error in worker:", err);
        res.status(500).send("An error occurred while processing your request.");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
