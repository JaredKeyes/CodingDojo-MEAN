var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema ({
  name: String,
  desc: String,
  user_id: String,
  user_name: String,
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

mongoose.model('Topic', TopicSchema);
