const app = require("./app.js");

const { port } = require('./config/config.js');

app.listen(port, () => {
    console.log("server work on : http://localhost:"+port);
});