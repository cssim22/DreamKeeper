const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://cssim22:crocodile@cluster0.bogtj.mongodb.net/dreams?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI,{
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'dreams'
})
  .then(() => console.log('Connected to Mongo DB!!!'))
  .catch(err => console.log(err,"can not connect to MongoDB"));

const Schema = mongoose.Schema;

  //Set schema for dreams
const dreamSchema = new Schema({
  title: String,
  detail: String,
  label: String
  });

const Dream = mongoose.model('dream', dreamSchema);


module.exports = {
  Dream
}

