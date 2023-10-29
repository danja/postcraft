const postcraft = require('./src/postcraft');
const HttpServer = require('./src/server');

const args = require('args-parser')(process.argv);
console.info(args);


console.log(postcraft.run())

server = new HttpServer()
server.start()