var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema ({
  text: String,
  details: String,
  user_id: String,
  user_name: String,
  likes: Number,
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'}
});

mongoose.model('Post', PostSchema);
