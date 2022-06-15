const os = require("os");

//info on current user
const user = os.userInfo();
console.log(user);

//user uptime in seconds by only console.log

console.log(`User uptime is ${os.uptime()} seconds`);

//about system in object

const currentOs = {
  name: os.type(),
  realease: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
