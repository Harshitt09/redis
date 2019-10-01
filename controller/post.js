const model = require("../model/schema");
const jwt = require("../model/jwt");
var redis = require("redis"),
  client = redis.createClient();
client.on("error", function(err) {
  console.log("Error " + err);
});

exports.createPost = async (req, res) => {
  data = req.body;
  data.userID = jwt.tokenData.id;
  myUserId = jwt.tokenData.id;
  deviceId = jwt.tokenData.deviceId;

  client.get(myUserId, (err, reply) => {
    if (!err) {
      if (!reply) {
        client.set(myUserId, deviceId, redis.print);
        console.log("you login at first time");
      } else {
        if (deviceId != reply) {
          console.log("deviceId is not same as previous deviceId");
        } else console.log("you are on same device");
      }
    }
  });

  await model.postSchema.create(data, (err, result) => {
    if (!err) {
      res.send("post successfully");
    } else {
      res.send("error generated");
    }
  });
};
