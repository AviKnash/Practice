const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const PORT = 8000;

// Middleware function for logging requests
const logger = (req) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
};

// Serve static files
const serveStatic = (filePath, contentType, res) => {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 Internal Server Error");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });
};

// Start server
const server = http.createServer((req, res) => {
    logger(req); // Log every request

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Routes
    if (req.method === "GET" && pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to the Home Page</h1>");
    } else if (req.method === "GET" && pathname === "/data") {
        const query = parsedUrl.query; // Access query parameters
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Here is your data", query }));
    } else if (req.method === "POST" && pathname === "/submit") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body); // Assuming JSON input
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Data received", data: parsedBody }));
        });
    } else if (req.method === "PUT" && pathname === "/update") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Data updated", data: parsedBody }));
        });
    } else if (req.method === "DELETE" && pathname === "/delete") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Resource deleted" }));
    } else if (req.method === "GET" && pathname.startsWith("/static/")) {
        const filePath = path.join(__dirname, pathname);
        const ext = path.extname(filePath);
        const contentType = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "application/javascript",
            ".json": "application/json",
            ".png": "image/png",
            ".jpg": "image/jpeg",
        }[ext] || "text/plain";
        serveStatic(filePath, contentType, res);
    } else {
        // Handle 404
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

// Listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
