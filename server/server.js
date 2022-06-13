/* eslint-disable eqeqeq */
const
    express = require('express'),
    app = express(),
    httpsOptions = require('./https'),
    https = require('https').Server(httpsOptions, app),
    fs = require("fs"),
    cors = require('cors');

app.get("/", cors(), (req, res) => {
    res.header('Access-Control-Allow-Origin: http://192.168.1.100:3000');
    res.sendFile(__dirname + "/cardList.json");
});
app.get("/card/:id", cors(), (req, res) => {
    console.log(req.params.id);

    const filePath = "cardList.json";
    const content = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(content);
    for (let i = 0; i < users.length; i++) {
        if (i == req.params.id) {
            let user = users[i];
            res.header('Access-Control-Allow-Origin: http://192.168.1.100:3000/card/:id');
            res.status(200).send(user);
        }
    }
});

https.listen(5443, "192.168.1.100", () => {
    console.log("Server running to 192.168.1.100:5443")
});