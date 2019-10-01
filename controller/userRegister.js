const model = require("../model/schema");

exports.userRegisterData = async (req, res) => {
  let data = req.body;
  await model.userSchema.create(data, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        msg: "user is registered",
        result: data
      });
    }
  });
};
