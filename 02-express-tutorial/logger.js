const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //next has to happen to pass on or we can create a res.send
  next();
};

module.exports = logger;
