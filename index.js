
// core modules
const http = require('http');
const { parse } = require('path');
const url = require("url")
const fs = require('fs')

const server = http.createServer((req, res) => {

    const address_url = "http://localhost:8080/contact?name=%22sajid%22&country=%22Bangladesh%22";

    /*const parsed_url = url.parse(address_url, true);
    const queryObj = parsed_url.query
    console.log(queryObj);*/

    if (req.url == "/") {
        /*res.writeHead(200, { 'content-type': 'text/html' });
        res.write(JSON.stringify({ 'Course': "ACC" }));
        res.end();*/

        /*fs.readFile("data.txt", (err, data) => {
            if (err) {
                res.write("Failed to write");
                res.end();
            } else {
                res.write(data);
                res.end();
            }

        });*/

        /*const data = fs.readFileSync('data.txt');
        res.write(data);
        res.end();*/

        fs.writeFile("new.txt", "Hello mongo db", (err) => {
            if (err) {
                res.write("Failed to write");
                res.end();
            } else {
                res.write("Data written successfully");
                res.end();
            }
        })


    }
    // else if (req.url == '/about') {

    //     res.writeHead(200, { 'content-type': 'text/html' });
    //     res.write('<h3>This is about</h3>');
    //     res.end();
    // } else if (req.url == '/contact') {

    //     res.writeHead(200, { 'content-type': 'text/html' });
    //     res.write('<h3>This is contact</h3>');
    //     res.end();

    // }
    // else {
    //     res.writeHead(200, { 'content-type': 'text/html' });
    //     res.write('<h3>This is nothing</h3>');
    //     res.end();
    // }

});

const PORT = 8080;
server.listen(PORT);

// console.log(`Server is running at ${PORT}`);
// console.log(url);
