const net = require("net");
const { IP, PORT, NAME } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });


  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write(`${NAME} connected.`);
  });

  conn.on("connect", () => {
    conn.write(`Name: ${NAME}`);
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