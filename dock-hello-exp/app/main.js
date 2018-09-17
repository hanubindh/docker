const express = require("express");
const os = require("os");

const host = "0.0.0.0"
const port = 8080;
const app = express();
const idLength = 10000;



app.get("/", (req, resp) => {
	// The Laziest way to create an object "literally" :p
	var data = {
		id: (Math.floor((Math.random() + 1) * 10000)).toString(),
		time: new Date().toJSON(),
		hostName: os.hostname(),
		message: "Hello World"
	}; 
	console.log(`Tx-${data.id} : Responding to request`);
	resp.send(data);
});

app.listen(port, host, () => {
	console.log(`App started in ${host}:${port}`);
});