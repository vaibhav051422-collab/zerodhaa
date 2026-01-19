const mongoose = require("mongoose");
const { UserSchema } = require("../schemas/UsersSchema");

const UsersModel = mongoose.model("user", UserSchema);

module.exports = { UsersModel };

