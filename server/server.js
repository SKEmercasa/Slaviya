const
    express = require('express'),
    app = express(),
    httpsOptions = require('./https'),
    https = require('https').Server(httpsOptions, app),
    cors = require('cors');

app.get("/", cors(), (req, res) => {
    res.header('Access-Control-Allow-Origin: https://127.0.0.1:3000');
    res.sendFile(__dirname + "/cardList.json");
});

https.listen(5443, "192.168.1.100", () => {
    console.log("Server running to 192.168.1.100:5443")
});