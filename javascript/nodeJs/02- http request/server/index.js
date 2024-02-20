const http = require("http");
const internJSON = require("./data/internsData.json");
const PORT = 2708;

http
  .createServer(function (req, res) {
    console.log("server is running on port:2708");
    res.write(JSON.stringify(internJSON));
    res.end();
  })
  .listen(PORT);
