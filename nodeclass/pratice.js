const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`The system Time update is ${os.uptime()} seconds`);

const currentos = {
  name: os.hostname,
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
  version: os.version(),
  uptime: os.uptime(),
  userInfo: os.userInfo(),
};
console.log(currentos);
