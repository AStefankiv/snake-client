const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: ADR");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });

  // conn.on("connect", () => {
  //   conn.write("Move: down");
  // });

  // conn.on("connect", () => {
  //   conn.write("Move: left");
  // });

  // conn.on("connect", () => {
  //   conn.write("Move: right");
  // });

  return conn;
};

module.exports = connect;