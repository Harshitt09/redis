const model = require("../model/schema");
const jwt = require("jsonwebtoken");
exports.loginUser = async (req, res) => {
  let exist = await model.userSchema.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (exist) {
    const token = jwt.sign(
      { id: exist._id, deviceId: req.body.deviceId },
      "SecrteKey"
    );
    res.send(token);
  } else {
    res.send("user does not exist");
  }
};
