const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove){_id: '58bf03c8d2f23224660d91fa'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('58bf03c8d2f23224660d91fa').then((todo) => {
  console.log(todo);
});
