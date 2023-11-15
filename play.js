const net = require("net");
const connect = require("./client");// establishes a connection with the game server
// const stdin = require("process");
const setupInput = require("./input");

console.log("Connecting ...");
connect();


setupInput();