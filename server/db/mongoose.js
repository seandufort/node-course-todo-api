var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://sean:padua117@ds121190.mlab.com:21190/node-todo-api' || 'mongodb://localhost:27017/TodoApp');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');


module.export = {mongoose};
