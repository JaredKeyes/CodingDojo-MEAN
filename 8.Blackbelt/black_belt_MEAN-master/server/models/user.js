var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  topicsCt: Number,
  postsCt: Number,
  commentsCt: Number
});

mongoose.model('User', UserSchema);
