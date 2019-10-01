const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Redis", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB CONNECTED"));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  dateCreated: { type: Date, default: new Date() }
});

let postSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId },
  totalComment: { type: Number, default: 0 },
  totalLike: { type: Number, default: 0 },
  title: { type: String, required: true },
  postType: { type: String, enum: ["image", "video"] },
  postDate: { type: Date, default: new Date() }
});

exports.userSchema = mongoose.model("user", userSchema);
exports.postSchema = mongoose.model("post", postSchema);
