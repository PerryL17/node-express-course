// check username, password in post(login) request
// if exsist create new JTW
// send back to frontend

//setup authentication so only the rewquest with JWT can access the dashboard

const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  //mongoose validations can setup or
  //Joi is another package or
  // check in the controller

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const id = new Date().getDate();
  //try to keep payload small, better exoerience for user
  // just for demo, in production use long, complex and unguessable string!!!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user);

  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data. Your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
